import { useState } from "react";
import { useRouter } from "next/router";

export default function StudentApplicationForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, course, message } = formData;

    if (!name.trim() || !email.trim() || !phone.trim() || !course) {
      alert("Please fill in all required fields.");
      return;
    }

    localStorage.setItem("studentName", name.trim());
    localStorage.setItem("studentEmail", email.trim());
    localStorage.setItem("studentPhone", phone.trim());
    localStorage.setItem("studentCourse", course);
    localStorage.setItem("studentMessage", message.trim());

    if (course === "B.Tech" || course === "B.E") {
      router.push("/specialization");
    } else if (course === "B.Sc" || course === "B.Com" || course === "BA") {
      router.push("/grievance-category");
    } else {
      alert(`Application submitted successfully!\nThank you, ${name.trim()}.`);
      router.push("/");
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "0 auto",
        padding: 20,
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Student Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="course">Course Applying For:</label>
        <select
          id="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Select a course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="B.Sc">B.Sc</option>
          <option value="B.Com">B.Com</option>
          <option value="BA">BA</option>
          <option value="B.E">B.E</option>
        </select>

        <label htmlFor="message">Additional Notes (optional):</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#004080",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
