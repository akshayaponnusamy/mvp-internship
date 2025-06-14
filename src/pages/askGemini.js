import { useState } from 'react';

export default function AskGemini() {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setAnswer('Error: Prompt cannot be empty');
      return;
    }

    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/askGemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok || !res.body) {
        throw new Error('Response error or empty body');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setAnswer((prev) => prev + chunk);
      }
    } catch (err) {
      console.error('Error:', err);
      setAnswer('Error: Failed to fetch response from server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Ask Gemini</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Ask your question..."
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </form>
      <div>
        <h2>Response:</h2>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{answer}</pre>
      </div>
    </div>
  );
}
