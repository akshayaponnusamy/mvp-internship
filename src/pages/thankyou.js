"use client";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [message, setMessage] = useState("");
  const [img, setImg] = useState("/default.png");

  useEffect(() => {
    const name = localStorage.getItem("feedbackName") || "Student";
    const category = localStorage.getItem("feedbackCategory") || "general";

    const messages = {
      "paper-reevaluation": `Thanks, ${name}, for your feedback on Paper Re-evaluation.`,
      "lecture-timetable": `Lecture timetable issue noted, ${name}.`,
      "learning": `Thanks, ${name}, for your input on Learning Resources.`,
      "finance": `Thanks for sharing your finance issue, ${name}.`,
      "admission": `Admission concerns received, ${name}.`,
      "examination": `We appreciate your examination feedback, ${name}.`,
    };

    const imgs = {
      "paper-reevaluation": "/paper-reevaluation.png",
      "lecture-timetable": "/lecture-timetable.png",
      "learning": "/learning.png",
      "finance": "/finance.png",
      "admission": "/admission.png",
      "examination": "/examination.png",
    };

    setMessage(messages[category] || "Thank you for your feedback!");
    setImg(imgs[category] || "/default.png");
  }, []);

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>Thank You!</h1>
      <p>{message}</p>
      <img src={img} alt="Thank you" style={{ maxWidth: "300px" }} />
      <br />
      <a href="/">Back to Home</a>
    </div>
  );
}
