import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const categoryData = {
  "paper-reevaluation": {
    title: "Paper Re-evaluation Feedback",
  },
  "lecture-timetable": {
    title: "Lecture Timetable Feedback",
  },
  learning: {
    title: "Learning Resources Feedback",
  },
  finance: {
    title: "Finance / Fees Feedback",
  },
  admission: {
    title: "Admission Issues Feedback",
  },
  examination: {
    title: "Examination Feedback",
  },
};

export default function FeedbackForm() {
  const router = useRouter();
  const { category } = router.query;

  const [pageTitle, setPageTitle] = useState("Grievance Feedback");
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    details: "",
  });

  useEffect(() => {
    if (category && categoryData[category]) {
      setPageTitle(categoryData[category].title);
    } else if (category) {
      setPageTitle("Unknown Category");
      alert("Invalid grievance category selected.");
    }
  }, [category]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { studentName, studentEmail, details } = formData;

    if (!studentName.trim() || !studentEmail.trim() || !details.trim()) {
      alert("Please fill all the fields.");
      return;
    }

    // Store feedback details in localStorage
    localStorage.setItem("feedbackCategory", category);
    localStorage.setItem("feedbackName", studentName.trim());
    localStorage.setItem("feedbackEmail", studentEmail.trim());
    localStorage.setItem("feedbackDetails", details.trim());

    // ✅ Navigate to thank you page
    router.push("/thankyou");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#eef2f7",
        padding: 20,
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#004080" }}>{pageTitle}</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          marginTop: 20,
        }}
      >
        <label htmlFor="studentName" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Your Name:
        </label>
        <input
          type="text"
          id="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 10,
            marginTop: 5,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="studentEmail" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Your Email:
        </label>
        <input
          type="email"
          id="studentEmail"
          value={formData.studentEmail}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 10,
            marginTop: 5,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="details" style={{ display: "block", marginTop: 10, fontWeight: "bold" }}>
          Details about your grievance:
        </label>
        <textarea
          id="details"
          rows={5}
          value={formData.details}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 10,
            marginTop: 5,
            borderRadius: 5,
            border: "1px solid #ccc",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: 15,
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            padding: 12,
            width: "100%",
            fontSize: 16,
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
