// testScript.js
import runAIAPI from './api.js';
const testRunAIAPI = async () => {
  const accountId = '5123d41fcfd907d51075cb66f102e0bd';
  const apiToken = 'cF8U0J3dcdAXU1v4OOnQXm-9Cm3tXVqzdTfKwLCG';
  const searchHistory =
    '1. Latest Fashion Trends 2024 - Query: "Fashion trends 2024" - Results: Explored fashion magazines, runway shows, and designer websites for insights into upcoming trends. 2. Sustainable Fashion Brands - Query: "Top sustainable fashion brands" - Results: Researched and compiled a list of eco-friendly and ethical fashion brands known for sustainable practices. 3. How to Style Vintage Clothing - Query: "Tips for styling vintage clothing" - Results: Explored articles and videos on creating modern looks with vintage pieces. 4. Street Style Inspiration - Query: "Street style fashion inspiration" - Results: Scanned through street style photography from fashion weeks and urban fashion blogs for outfit ideas. 5. Fashion Photography Techniques - Query: "Creative fashion photography techniques" - Results: Explored photography tutorials and articles on capturing fashion in unique and artistic ways. 6. Influential Fashion Designers - Query: "Most influential fashion designers" - Results: Researched profiles and contributions of renowned fashion designers throughout history. 7. DIY Fashion Projects - Query: "DIY fashion ideas" - Results: Explored tutorials and blogs for do-it-yourself fashion projects, such as customizing clothing or creating accessories. 8. Fashion Events Near Me - Query: "Fashion events in [City]" - Results: Checked local event listings for fashion shows, pop-up shops, and networking events in the area. 9. Fashion Careers and Education - Query: "Fashion industry careers and education" - Results: Explored information on fashion schools, career paths, and industry requirements for aspiring fashion professionals. 10. Celebrity Red Carpet Looks - Query: "Best celebrity red carpet looks" - Results: Explored galleries and articles showcasing celebrities\' fashion choices at major events. 11. How to Start a Fashion Blog - Query: "Tips for starting a fashion blog" - Results: Researched guides on creating and promoting a fashion blog, including content and social media strategies. 12. Fashion Illustration Techniques - Query: "Fashion illustration tutorial" - Results: Explored videos and articles on honing skills in fashion illustration for personal or professional use. 13. Men\'s Fashion Essentials - Query: "Must-have items in men\'s fashion" - Results: Researched wardrobe staples and trends for men\'s fashion, including grooming and accessorizing tips. 14. Fashion Podcasts for Inspiration - Query: "Best fashion podcasts" - Results: Listened to and subscribed to podcasts featuring interviews with industry experts, designers, and fashion enthusiasts. 15. Fashion History Timeline - Query: "Timeline of fashion history" - Results: Explored historical periods and fashion evolution to gain a deeper understanding of style influences.';

  //   const prompt = `Based on this search history: ${searchHistory}, give a list of 5 topics they might be interested in. Make the output comma seperated so that it can be parsed easily.`;
  const prompt =
    'Make a lesson that is 650 words total which will teach the user about fashion photography techniques, and has the following headers:Introduction,small activity, content related back to the activity, Conclusion ';
  try {
    const result = await runAIAPI(accountId, apiToken, prompt);
    console.log('API Response:', result);
    // Handle the response data as needed
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
  }
};

// Run the test function
testRunAIAPI();
