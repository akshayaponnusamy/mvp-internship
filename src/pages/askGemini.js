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

    console.log('Sending prompt:', prompt); // Debug log
    setLoading(true);

    try {
      const res = await fetch('/api/askGemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setAnswer(data.answer);
      } else {
        setAnswer('Error: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      console.error('Error calling API:', err);
      setAnswer('Error: Failed to fetch response from server');
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
        <p>{answer}</p>
      </div>
    </div>
  );
}
