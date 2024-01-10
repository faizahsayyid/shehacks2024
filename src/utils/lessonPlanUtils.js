import runAIAPI from '../api/api.js';

const generateLessonPlans = async (accountId, apiToken, searchHistory) => {
  try {
    const prompt = `Based on this search history: "${searchHistory}", give a list of 5 topics they might be interested in. Each topic should be 1-5 words long, and before a topic the word [START] and at the end of the topic [END] so that it can be parsed easily.`;

    // Call the AI API to get suggested topics
    const response = await runAIAPI(accountId, apiToken, prompt);

    // Log the suggested topics for testing
    console.log('Cloudflare AI API Response:', response);
    // console.log(response.result.response);

    // Extract the topics:
    const topicsMatch = response.result.response.match(
      /\[START\](.*?)\[END\]/g
    );

    if (!topicsMatch) {
      console.log('No topics found in the specified format.');
      return null;
    }

    // Extract topics from the matched strings
    const suggestedTopics = topicsMatch.map((match) =>
      match.slice('[START]'.length, -'[END]'.length).trim()
    );

    // Log the suggested topics for testing
    console.log('Suggested Topics:', suggestedTopics);
    const lesson_headers = [
      'Overview',
      'Activate Your Knowledge',
      'Expand Your Knowledge',
      'Reflection and Next Steps',
    ];

    // Generate lesson plans from the suggested topics
    const lessonPlans = {}; // dict to store lesson plans per topic

    for (const topic of suggestedTopics) {
      lessonPlans[topic] = {};

      const lessonTopic = `Make a write-up which teaches the user about ${topic}.`;

      // Template object for prompt construction
      const promptTemplates = {
        Overview: `Give an introduction about the ${topic} that is 300 words.`,
        'Activate Your Knowledge': `Suggest to the user a small activity that is either a quiz or a hands-on activity to reinforce their learning regarding ${topic}.`,
        'Expand Your Knowledge': `Give more information about the ${topic} that is 300 words and relevant to the activity suggested under "Activate Your Knowledge".`,
        'Reflection and Next Steps': `Give a conclusion about the ${topic} that is 300 words and suggest next steps for further inquiry (e.g., more sites, more activities, books to read, films to watch) about the topic.`,
      };

      for (const header of lesson_headers) {
        const headerPrompt = `${lessonTopic} ${promptTemplates[header]}`;
        const response = await runAIAPI(accountId, apiToken, headerPrompt);
        console.log('Response:', response.result.response);
        const headerPlan = response.result.response;
        lessonPlans[topic][header] = headerPlan;

        // Add a 1-minute delay between API calls
        await new Promise((resolve) => setTimeout(resolve, 60 * 1000));
      }
    }

    console.log('Generated Lesson Plans:', lessonPlans);
    return lessonPlans;
  } catch (error) {
    console.error('Error generating lesson plans:', error);
    throw error;
  }
};

export default generateLessonPlans;
