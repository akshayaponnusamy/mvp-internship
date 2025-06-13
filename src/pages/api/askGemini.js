// File: src/pages/api/askGemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("Missing Gemini API Key");
    return res.status(500).json({ error: 'Gemini API key not configured' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // generateContent returns a promise resolving to a Generation object
    const generation = await model.generateContent(prompt);

    // generation.response is a Response object, get text() is async
    const text = await generation.response.text();

    return res.status(200).json({ answer: text });

  } catch (error) {
    console.error("Gemini API error:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
