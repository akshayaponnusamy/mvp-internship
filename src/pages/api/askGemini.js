export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  // Example: simulate a streaming response
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Transfer-Encoding', 'chunked');

  for (let i = 0; i < prompt.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 50)); // simulate delay
    res.write(prompt[i]);
  }

  res.end();
}
