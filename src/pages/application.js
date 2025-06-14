import { useState } from "react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [category, setCategory] = useState("");
  const [showCategoryForm, setShowCategoryForm] = useState(false);
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

    const prompt = `
      A student application has been submitted with these details:
      Name: ${form.name}
      Email: ${form.email}
      Phone: ${form.phone}
      Course: ${form.course}
      Message: ${form.message || "N/A"}

      Please respond appropriately.
    `;

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

        // Optional: open Bard in new tab
        window.open("https://bard.google.com/", "_blank");

        // Show category form after 5 seconds
        setTimeout(() => {
          setShowCategoryForm(true);
        }, 5000);
      } else {
        setLoading(false);
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || "Server error");
    }
  };

  const handleCategorySubmit = () => {
    if (!category) {
      alert("Please select a category");
      return;
    }
    alert("Category submitted: " + category);
    // You can add Firestore or API call here
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      {!showCategoryForm && (
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
      )}

      {geminiReply && !showCategoryForm && (
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
            Redirecting to category selection shortly...
          </p>
        </div>
      )}

      {showCategoryForm && (
        <div style={{ marginTop: 30 }}>
          <h3>Select Specialization or Grievance Category:</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select Category --</option>
            <option value="Hostel">Hostel</option>
            <option value="Academic">Academic</option>
            <option value="Finance">Finance</option>
            <option value="Transport">Transport</option>
            <option value="Others">Others</option>
          </select>
          <br /><br />
          <button onClick={handleCategorySubmit}>Submit Category</button>
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
