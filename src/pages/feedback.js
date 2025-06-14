"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Feedback() {
  const router = useRouter();
  const { category } = router.query;
  const [form, setForm] = useState({ studentName: "", studentEmail: "", details: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("feedbackCategory", category);
    localStorage.setItem("feedbackName", form.studentName);
    localStorage.setItem("feedbackEmail", form.studentEmail);
    localStorage.setItem("feedbackDetails", form.details);
    router.push("/thankyou");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Feedback for: {category}</h2>
      <input id="studentName" placeholder="Your Name" value={form.studentName} onChange={handleChange} required />
      <br />
      <input id="studentEmail" type="email" placeholder="Your Email" value={form.studentEmail} onChange={handleChange} required />
      <br />
      <textarea id="details" placeholder="Describe your issue" value={form.details} onChange={handleChange} required />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
