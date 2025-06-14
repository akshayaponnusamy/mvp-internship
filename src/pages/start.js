"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function StartTracking() {
  const router = useRouter();
  const [status, setStatus] = useState("waiting");

  // Simulate polling Gemini every 2 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/check-status"); // You create this backend
        const data = await res.json();
        if (data.status === "submitted") {
          clearInterval(interval);
          router.push("/specialization");
        }
      } catch (error) {
        console.error("Status check failed", error);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2>Live Application Tracking</h2>
      <p>Waiting for application to be submitted...</p>
    </div>
  );
}
