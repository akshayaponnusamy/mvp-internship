import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#f0f8ff", color: "#333", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "#007BFF", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Student Grievance Support System</h1>
        <p>Good morning! Welcome to the portal.</p>
      </header>

      {/* Navigation with added Login and Register */}
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
        <Link href="/application" style={navLinkStyle}>Apply Now</Link>
        <Link href="/login" style={navLinkStyle}>Login</Link>
        <Link href="/register" style={navLinkStyle}>Register</Link>
      </nav>

      {/* Main Section */}
      <section style={{ textAlign: "center", padding: "40px 20px" }}>
        <h2 style={{ color: "#007BFF", marginBottom: "15px" }}>Ready to Apply?</h2>
        <p>Submit your student application through our secure form.</p>
        <Link
          href="/application"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            marginTop: "10px",
          }}
        >
          Go to Application Form
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#007BFF", color: "white", textAlign: "center", padding: "15px", marginTop: "40px" }}>
        <p>© 2025 Student Grievance Support System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// Reusable style for nav links
const navLinkStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  textDecoration: "none",
};