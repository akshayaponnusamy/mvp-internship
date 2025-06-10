import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Card from "../components/Card";

export default function StudentGrievancePortal() {
  const router = useRouter();

  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) greeting = "Good morning! Welcome to the portal.";
  else if (hour < 18) greeting = "Good afternoon! Welcome to the portal.";
  else greeting = "Good evening! Welcome to the portal.";

  function handleLoginSubmit(e) {
    e.preventDefault();
    alert("Login successful!");
    router.push("/application");
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    alert("Registration successful!");
    router.push("/application");
  }

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#f0f8ff",
        color: "#333",
        minHeight: "100vh",
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

      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2 style={{ color: "#007BFF", marginBottom: 15 }}>Ready to Apply?</h2>
        <p>Submit your student application through our secure form.</p>

        {/* Example usage of Button component */}
        <Button label="Login" onClick={handleLoginSubmit} />
        <Button label="Register" onClick={handleRegisterSubmit} />

        <div style={{ marginTop: 40 }}>
          {/* Example usage of Card component */}
          <Card
            title="Why Submit a Grievance?"
            content="We ensure all student concerns are addressed transparently and promptly."
          />
          <Card
            title="Need Help?"
            content="Contact our support team anytime for assistance with your submission."
          />
        </div>
      </section>

      <footer
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          textAlign: "center",
          padding: 15,
          marginTop: 40,
        }}
      >
        <p>© 2025 Student Grievance Support System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}