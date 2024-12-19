import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import "./App.css";
import { Home } from "./components/Home";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {About} from "./components/About";
import {Booking} from "./components/Booking";
import {MyBooking} from "./components/MyBooking";
import {AdminLogin} from "./components/AdminLogin";
import {Flight} from "./components/Flight";
import { AdminHome } from "./components/AdminHome";
import { AddAirPort } from "./components/AddAirPort";
import { Display } from "./components/Display";
import { BookingForm } from "./components/BookingForm";
function App() {
  {/*const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user.role);
      console.log(user.role);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };*/}
  return (
    <div className="App">
      <Router>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/MyBooking" element={<MyBooking />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/airport" element={<AddAirPort />} />
          <Route path="/display" element={<Display />} />
          <Route path="/bookingForm" element={<BookingForm />} />
          <Route path="/adminHome" element={<AdminHome />} />


          
        </Routes>
      </Router>
    </div>
  );
}

export default App;


/*import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { getList, setUserData } from './services/list'; // On utilise setUserData pour envoyer les données
import AdminInterface from './components/AdminInterface'; // Import du composant Admin
import ClientInterface from './components/ClientInterface'; // Import du composant Client

// Page d'accueil (connexion)
function Home() {
  const [alert, setAlert] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [list, setList] = useState([]);
  const [userType, setUserType] = useState(''); // Type d'utilisateur (admin ou client)
  const mounted = useRef(true);
  const navigate = useNavigate(); // Hook de navigation pour rediriger

  useEffect(() => {
    mounted.current = true;
    if (list.length && !alert) {
      return;
    }
    getList()
      .then(items => {
        if (mounted.current) {
          setList(items);
        }
      });
    return () => mounted.current = false;
  }, [alert, list]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 1000);
    }
  }, [alert]);

  // Fonction handleLogin pour gérer la soumission du formulaire
  const handleLogin = (e) => {
    e.preventDefault();

    // Appel de la fonction setUserData pour envoyer le username et le password
    setUserData(userName, password)
      .then(response => {
        console.log('Réponse de l\'API:', response); // Vérifier la structure de la réponse
        if (mounted.current) {
          // Vérifier le type de l'utilisateur dans la réponse
          if (response && response.type) {
            if (response.type === 'admin') {
              setUserType('admin');
            } else if (response.type === 'client') {
              setUserType('client');
            }
          } else {
            console.error('Le type d\'utilisateur n\'est pas fourni dans la réponse.');
          }
          setUserName(''); // Réinitialise le champ username
          setPassword(''); // Réinitialise le champ password
          setAlert(true); // Affiche le message de succès
        }
      })
      .catch(error => {
        console.error('Erreur lors de la connexion', error);
      });
  };

  // Utilisation de useEffect pour rediriger après avoir mis à jour le type d'utilisateur
  useEffect(() => {
    if (userType === 'admin') {
      navigate('/admin'); // Redirige vers l'interface admin
    } else if (userType === 'client') {
      navigate('/client'); // Redirige vers l'interface client
    }
  }, [userType, navigate]); // Dépendance sur userType pour rediriger après sa mise à jour*/
/*
  return (
    <div className="wrapper">
      <h1>login</h1>

      {alert && <h2>Submit Successful</h2>}*/

      /*{userType === '' && (
        <form onSubmit={handleLogin}>
          <label>
            <p>Username</p>
            <input type="text" onChange={event => setUserName(event.target.value)} value={userName} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}*/

// Composant App avec Routes
/*function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/admin" element={<AdminInterface />} />
          
          <Route path="/client" element={<ClientInterface />} />
        </Routes>
      </div>
    </Router>
  );
}*/

//export default App;


/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import useToken from './useToken';*/
/*function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
function App() {
  const { token, setToken } = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
           

          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
    </div>
  );
}*/



