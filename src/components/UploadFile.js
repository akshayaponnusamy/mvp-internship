// src/components/UploadFile.js
import { useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function UploadFile() {
  const [studentName, setStudentName] = useState('');
  const [department, setDepartment] = useState('');
  const [grievance, setGrievance] = useState('');

  const handleSubmit = async () => {
    if (!studentName || !department || !grievance) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "uploads"), {
        studentName,
        department,
        grievance,
        timestamp: serverTimestamp()
      });
      alert("Grievance submitted! ID: " + docRef.id);
      setStudentName('');
      setDepartment('');
      setGrievance('');
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Upload failed: " + error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📁 Upload Student Grievance</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      /><br /><br />
      <textarea
        placeholder="Grievance"
        value={grievance}
        onChange={(e) => setGrievance(e.target.value)}
      /><br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
