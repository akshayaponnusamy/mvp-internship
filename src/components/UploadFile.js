// src/components/UploadFile.js
import { useState } from 'react';
import { db } from '../firebase/firebase'; // make sure this is correct path
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function UploadFile() {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    if (!name) {
      alert("Please enter a name");
      return;
    }

    try {
      await addDoc(collection(db, "uploads"), {
        name: name,
        timestamp: serverTimestamp()
      });
      alert("Details uploaded to Firestore!");
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <h2>📁 Upload Text to Firestore</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}
