import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const sendMessageToGPT = async (message) => {
  try {
    const response = await api.post('/chat/completions', {
      model: "gpt-4",  // Assure-toi d'utiliser le bon modèle.
      messages: [{ role: "user", content: message }],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error sending message to GPT:', error);
    return "Erreur lors de la connexion au service GPT.";
  }
};
