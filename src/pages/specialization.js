"use client"; // If using App Router
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SpecializationSelection() {
  const router = useRouter();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [specializations, setSpecializations] = useState([]);
  const [selectedSpec, setSelectedSpec] = useState("");

  const specializationOptions = {
    "B.Tech": [
      "Artificial Intelligence and Data Science (AI&DS)",
      "Information Technology (IT)",
      "Chemical Engineering",
    ],
    "B.E": [
      "Electronics and Communication Engineering (ECE)",
      "Electrical and Electronics Engineering (EEE)",
      "Civil Engineering",
      "Mechanical Engineering",
    ],
  };

  useEffect(() => {
    const name = localStorage.getItem("studentName") || "";
    const email = localStorage.getItem("studentEmail") || "";
    const phone = localStorage.getItem("studentPhone") || "";
    const course = localStorage.getItem("studentCourse") || "";

    setStudent({ name, email, phone, course });
    setSpecializations(specializationOptions[course] || []);
  }, []);

  const handleSubmit = () => {
    if (!selectedSpec) {
      alert("Please select a specialization.");
      return;
    }

    localStorage.setItem("finalSpecialization", selectedSpec);

    alert(`${student.course} Application Submitted Successfully!\nSpecialization: ${selectedSpec}`);
    router.push("/grievance-category"); // assuming you have this page
  };

  return (
    <div
      style={{
        backgroundColor: "#eef2f7",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          {student.course} Specialization Selection
        </h2>
        <h3 style={{ textAlign: "center" }}>Student Details</h3>

        <p>
          <strong>Name:</strong> {student.name || "-"}
        </p>
        <p>
          <strong>Email:</strong> {student.email || "-"}
        </p>
        <p>
          <strong>Phone:</strong> {student.phone || "-"}
        </p>

        <label htmlFor="specialization">Choose Specialization:</label>
        <select
          id="specialization"
          value={selectedSpec}
          onChange={(e) => setSelectedSpec(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <option value="">Select Specialization</option>
          {specializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#004080",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Submit Final Application
        </button>
      </div>
    </div>
  );
}
