import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "./Login.css";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password).then(
        (response) => {
          console.log("Logged In", response);
          const role = response.role;
          if (role === "admin") {
            navigate("/admin");
          } else if (role === "passenger") {
            navigate("/passenger");
          } else {
            navigate("/");
          }
        },
        (error) => {
          console.error(error);
          alert("Invalid credentials!");
        }
      );
    } catch (err) {
      alert(err.message || "An error occurred during login.");
    }
  };

  return (
    <div className="login-full">
      <Nav />
      <div className="auth-form-container">
        <h2><b>Login</b></h2>
        <h3>Enter your credentials</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
          />
          <button type="submit"><b>LOGIN</b></button>
        </form>
        <button
          className="link-btn"
          onClick={() => navigate("/register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
      <Footer />
    </div>
  );
};
