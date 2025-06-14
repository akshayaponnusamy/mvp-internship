"use client";
import { useRouter } from "next/router";

export default function GrievanceCategory() {
  const router = useRouter();

  const handleClick = (category) => {
    router.push(`/feedback?category=${encodeURIComponent(category)}`);
  };

  const categories = [
    "paper-reevaluation", "lecture-timetable", "learning",
    "finance", "admission", "examination",
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Select Grievance Category</h2>
      {categories.map((cat) => (
        <button key={cat} onClick={() => handleClick(cat)} style={{ display: "block", margin: "10px 0" }}>
          {cat}
        </button>
      ))}
    </div>
  );
}
