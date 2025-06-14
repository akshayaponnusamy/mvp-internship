import { useState } from "react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geminiReply, setGeminiReply] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setGeminiReply(null);

    const prompt = 
      A student application has been submitted with these details:
      Name: ${form.name}
      Email: ${form.email}
      Phone: ${form.phone}
      Course: ${form.course}
      Message: ${form.message || "N/A"}

      Please respond appropriately.
    ;

    try {
      const res = await fetch("/api/askGemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (res.ok && data.answer) {
        setGeminiReply(data.answer);
        setLoading(false);

        // Show Gemini’s reply for 3 seconds, then redirect to Bard
        setTimeout(() => {
          window.location.href = "https://bard.google.com/";
        }, 3000);
      } else {
        setLoading(false);
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || "Server error");
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          required
          onChange={handleChange}
          value={form.name}
        />
        <br />
        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={form.email}
        />
        <br />
        <input
          id="phone"
          placeholder="Phone"
          required
          onChange={handleChange}
          value={form.phone}
        />
        <br />
        <select
          id="course"
          required
          onChange={handleChange}
          value={form.course}
        >
          <option value="">Select a course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="B.Sc">B.Sc</option>
          <option value="B.Com">B.Com</option>
          <option value="BA">BA</option>
          <option value="B.E">B.E</option>
        </select>
        <br />
        <textarea
          id="message"
          placeholder="Message (optional)"
          onChange={handleChange}
          value={form.message}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {geminiReply && (
        <div
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "#f0f0f0",
            borderRadius: 4,
          }}
        >
          <h3>Gemini's reply:</h3>
          <p>{geminiReply}</p>
          <p style={{ fontStyle: "italic" }}>
            Redirecting you to the live chat page shortly...
          </p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: 20, color: "red" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
} 