import axios from "axios";

const API = axios.create({
  baseURL: " https://internship-auth.onrender.com",
});

export default API;