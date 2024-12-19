import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Modal from "react-modal";
import "./AdminLogin.css";
import AuthService from "../services/auth.service";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(username, password);
      if (response.role === "admin") {
        navigate("/admin");
      } else {
        setIsModalOpen(true); // Show modal if not an admin
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsModalOpen(true); // Show modal on login failure
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="add-admin-container">
      <Nav />
      <div className="add-admin-form-container">
        <h1 className="h1">Admin Login</h1>
        <form className="add-admin-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Access Denied"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="modal-heading">Access Denied</h2>
        <p className="modal-message">Invalid credentials or not an admin.</p>
        <button className="modal-button" onClick={closeModal}>
          OK
        </button>
      </Modal>
    </div>
  );
};
