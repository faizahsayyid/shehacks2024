import axios from 'axios';

const runAIAPI = async (accountId, apiToken, prompt) => {
  try {
    const response = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-2-7b-chat-int8`,
      {
        prompt: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 500000, // set a timeout value in milliseconds
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default runAIAPI;
