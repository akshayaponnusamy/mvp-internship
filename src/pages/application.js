"use client";
import { useState } from "react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");
    setSubmitted(true);

    const prompt = `
A student application has been submitted with these details:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Course: ${form.course}
Please provide personalized feedback or suggestions.
`;

    try {
      const res = await fetch("/api/askGemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok || !res.body) {
        throw new Error("No response body");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setAnswer((prev) => prev + chunk);
      }
    } catch (err) {
      console.error("Gemini API error:", err);
      setAnswer("Error: Could not fetch response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎓 Application Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="course"
          type="text"
          placeholder="Enter your course"
          value={form.course}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: 20 }}>
          <h2>🔍 Gemini AI Feedback</h2>
          {loading && <p>Fetching AI response...</p>}
          <pre style={{ whiteSpace: "pre-wrap" }}>{answer}</pre>
        </div>
      )}
    </div>
  );
}
