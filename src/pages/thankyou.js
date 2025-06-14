import { useEffect, useState } from "react";

const images = {
  "paper-reevaluation": {
    img: "/paper-reevaluation.png",
    getMsg: (name) => `Thank you, ${name}. Your feedback on Paper Re-evaluation has been received.`,
  },
  "lecture-timetable": {
    img: "/lecture-timetable.png",
    getMsg: (name) => `Thanks, ${name}. We’ll look into the Lecture Timetable issue.`,
  },
  learning: {
    img: "/learning.png",
    getMsg: (name) => `Thank you, ${name}, for your feedback on Learning Resources.`,
  },
  finance: {
    img: "/finance.png",
    getMsg: (name) => `We appreciate your feedback on Finance-related concerns, ${name}.`,
  },
  admission: {
    img: "/admission.png",
    getMsg: (name) => `Thank you, ${name}. Your input about Admission has been noted.`,
  },
  examination: {
    img: "/examination.png",
    getMsg: (name) => `Thanks, ${name}, for your feedback on Examinations.`,
  },
};

const fallback = {
  img: "/default.png",
  msg: "Thank you for your valuable feedback!",
};

export default function ThankYou() {
  const [message, setMessage] = useState(fallback.msg);
  const [imgSrc, setImgSrc] = useState(fallback.img);

  useEffect(() => {
    const category = localStorage.getItem("feedbackCategory");
    const name = localStorage.getItem("feedbackName") || "Student";

    if (category && images[category]) {
      setMessage(images[category].getMsg(name));
      setImgSrc(images[category].img);
    } else {
      setMessage(fallback.msg);
      setImgSrc(fallback.img);
    }
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "#f0f8ff",
        textAlign: "center",
        padding: 40,
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#004080", marginBottom: 10 }}>Thank You for Your Feedback!</h1>
      <h3 style={{ color: "#333", marginBottom: 30 }}>{message}</h3>
      <img
        src={imgSrc}
        alt="Thanks"
        style={{ maxWidth: "90%", borderRadius: 10, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      />
      <br />
      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: 30,
          backgroundColor: "#007BFF",
          color: "white",
          padding: "12px 20px",
          textDecoration: "none",
          borderRadius: 6,
        }}
      >
        Back to Home
      </a>
    </div>
  );
}
