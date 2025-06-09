"use client"; // Needed for client-side navigation and localStorage
import { useRouter } from "next/router";

export default function GrievanceCategory() {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/feedback?category=${encodeURIComponent(category)}`);
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    border: "none",
    color: "white",
    padding: "15px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const categories = [
    { key: "paper-reevaluation", label: "Paper Re-evaluation" },
    { key: "lecture-timetable", label: "Lecture Timetable" },
    { key: "learning", label: "Learning Resources" },
    { key: "finance", label: "Finance / Fees" },
    { key: "admission", label: "Admission Issues" },
    { key: "examination", label: "Examination" },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f9faff",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#004080" }}>
        Select Grievance Category
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        {categories.map(({ key, label }) => (
          <button
            key={key}
            style={buttonStyle}
            onClick={() => handleCategoryClick(key)}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007BFF")
            }
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
