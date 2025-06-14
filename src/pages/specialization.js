"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SpecializationSelection() {
  const router = useRouter();
  const [student, setStudent] = useState({ name: "", email: "", phone: "", course: "" });
  const [specializations, setSpecializations] = useState([]);
  const [selectedSpec, setSelectedSpec] = useState("");

  const specializationOptions = {
    "B.Tech": ["AI & DS", "IT", "Chemical Engineering"],
    "B.E": ["ECE", "EEE", "Civil", "Mechanical"],
  };

  useEffect(() => {
    const name = localStorage.getItem("studentName");
    const email = localStorage.getItem("studentEmail");
    const phone = localStorage.getItem("studentPhone");
    const course = localStorage.getItem("studentCourse");

    setStudent({ name, email, phone, course });
    setSpecializations(specializationOptions[course] || []);
  }, []);

  const handleSubmit = () => {
    if (!selectedSpec) {
      alert("Please select specialization");
      return;
    }
    localStorage.setItem("finalSpecialization", selectedSpec);
    router.push("/grievance-category");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{student.course} Specialization</h2>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <select value={selectedSpec} onChange={(e) => setSelectedSpec(e.target.value)}>
        <option value="">Select</option>
        {specializations.map((spec) => (
          <option key={spec} value={spec}>{spec}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}
