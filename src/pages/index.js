import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../component/Button";
import Card from "../component/Card";

export default function StudentGrievancePortal() {
  const router = useRouter();

  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good morning! Welcome to the portal."
      : hour < 18
      ? "Good afternoon! Welcome to the portal."
      : "Good evening! Welcome to the portal.";

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // You can replace this alert with a toast/snackbar
    alert("Login successful!");
    router.push("/application");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    router.push("/application");
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#f0f8ff",
        color: "#333",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Student Grievance Support System</h1>
        <p>{greeting}</p>
      </header>

      <nav
        style={{
          backgroundColor: "#0056b3",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "15px 0",
          flexWrap: "wrap",
        }}
      >
        <Link href="/application" legacyBehavior>
          <a
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Apply Now
          </a>
        </Link>
      </nav>

      <main style={{ textAlign: "center", padding: "40px 20px", flex: 1 }}>
        <h2 style={{ color: "#007BFF", marginBottom: 15 }}>Ready to Apply?</h2>
        <p>Submit your student application through our secure form.</p>

        <div style={{ marginTop: 20 }}>
          <Button label="Login" onClick={handleLoginSubmit} />
          <Button label="Register" onClick={handleRegisterSubmit} />
        </div>

        <div style={{ marginTop: 40 }}>
          <Card
            title="Why Submit a Grievance?"
            content="We ensure all student concerns are addressed transparently and promptly."
          />
          <Card
            title="Need Help?"
            content="Contact our support team anytime for assistance with your submission."
          />
        </div>
      </main>

      <footer
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          textAlign: "center",
          padding: 15,
        }}
      >
        <p>© 2025 Student Grievance Support System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
