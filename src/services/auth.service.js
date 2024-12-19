import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

// Registers a user
const signup = (firstname, lastname, username, password, role) => {
  return axios
    .post(API_URL + "/register", {
      firstname,
      lastname,
      username,
      password,
      role,
    })
    .then((response) => {
      console.log(response);
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// Logs in a user
const login = (username, password) => {
  return axios
    .post(API_URL + "/authenticate", { username, password })
    .then((response) => {
      console.log("Login Response:", response);
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// Logs out a user
const logout = () => {
  localStorage.removeItem("user");
};

// Retrieves the current user
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
