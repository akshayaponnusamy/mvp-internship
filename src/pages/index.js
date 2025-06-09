import Image from "next/image";

export default function StudentGrievancePortal() {
  // Greeting logic
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) greeting = "Good morning! Welcome to the portal.";
  else if (hour < 18) greeting = "Good afternoon! Welcome to the portal.";
  else greeting = "Good evening! Welcome to the portal.";

  // Form submit handlers
  function handleLoginSubmit(e) {
    e.preventDefault();
    alert("Login successful!");
    window.location.href = "application.html";
  }
  function handleRegisterSubmit(e) {
    e.preventDefault();
    alert("Registration successful!");
    window.location.href = "application.html";
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
        <p id="greeting">{greeting}</p>
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
        <a
          href="about.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontWeight: "bold", fontSize: "16px", textDecoration: "none" }}
        >
          About
        </a>
        <a href="#features" style={{ color: "white", fontWeight: "bold", fontSize: "16px", textDecoration: "none" }}>
          Features
        </a>
        <a href="#login" style={{ color: "white", fontWeight: "bold", fontSize: "16px", textDecoration: "none" }}>
          Login
        </a>
        <a href="#register" style={{ color: "white", fontWeight: "bold", fontSize: "16px", textDecoration: "none" }}>
          Register
        </a>
        <a
          href="contact.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontWeight: "bold", fontSize: "16px", textDecoration: "none" }}
        >
          Contact
        </a>
        <a
          href="application.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontWeight: "bold", fontSize: "16px", textDecoration: "none" }}
        >
          Apply Now
        </a>
      </nav>

      <section
        id="about"
        style={{ padding: "40px 20px", maxWidth: 1000, margin: "auto" }}
      >
        <h2 style={{ color: "#007BFF", marginBottom: 15, textAlign: "center" }}>
          About the Portal
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 20 }}>
          This digital portal is built to empower students to submit their academic or administrative grievances with ease. Complaints are securely routed to the appropriate department for timely resolution.
        </p>
        <img
          src="/student.png"
          alt="Students"
          style={{ width: "100%", borderRadius: 10, marginTop: 20 }}
        />
      </section>

      <section id="features" style={{ padding: "40px 20px", maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ color: "#007BFF", marginBottom: 15, textAlign: "center" }}>Features</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 20 }}>
          ✔ Real-time grievance tracking
          <br />
          ✔ Multi-level complaint routing
          <br />
          ✔ Secure and student-friendly design
        </p>
      </section>

      <section id="login" style={{ padding: "40px 20px", maxWidth: 500, margin: "auto" }}>
        <h2 style={{ color: "#007BFF", marginBottom: 15, textAlign: "center" }}>Login</h2>
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <form id="loginForm" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 15,
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 15,
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#007BFF",
                color: "white",
                padding: "10px 20px",
                border: "none",
                width: "100%",
                fontWeight: "bold",
                borderRadius: 5,
                cursor: "pointer",
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = "#0056b3")}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = "#007BFF")}
            >
              Login
            </button>
          </form>
        </div>
      </section>

      <section id="register" style={{ padding: "40px 20px", maxWidth: 500, margin: "auto" }}>
        <h2 style={{ color: "#007BFF", marginBottom: 15, textAlign: "center" }}>Register</h2>
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <form id="registerForm" onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 15,
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 15,
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            />
            <input
              type="password"
              placeholder="Create Password"
              required
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 15,
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#007BFF",
                color: "white",
                padding: "10px 20px",
                border: "none",
                width: "100%",
                fontWeight: "bold",
                borderRadius: 5,
                cursor: "pointer",
              }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = "#0056b3")}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = "#007BFF")}
            >
              Register
            </button>
          </form>
        </div>
      </section>

      <section
        id="apply"
        style={{ textAlign: "center", padding: "40px 20px" }}
      >
        <h2 style={{ color: "#007BFF", marginBottom: 15 }}>Ready to Apply?</h2>
        <p>Submit your student application through our secure form.</p>
        <a
          href="application.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "12px 24px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
            marginTop: 10,
          }}
        >
          Go to Application Form
        </a>
      </section>

      <section
        id="contact"
        style={{ padding: "40px 20px", maxWidth: 1000, margin: "auto" }}
      >
        <h2 style={{ color: "#007BFF", marginBottom: 15, textAlign: "center" }}>Contact Us</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 20, textAlign: "center" }}>
          Email: support@grievance-portal.gov.in
          <br />
          Phone: +91-98765-43210
          <br />
          Address: Grievance Cell, Govt of Tamil Nadu, Secretariat, Chennai
        </p>
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
