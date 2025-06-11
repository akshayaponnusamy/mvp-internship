import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registering user ${formData.name}`);
    // Add registration logic here
    router.push("/application"); // Redirect to application page after registration
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
