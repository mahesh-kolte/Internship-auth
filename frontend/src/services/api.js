 import axios from "axios";

const API = axios.create({
  baseURL: "https://internship-auth.onrender.com/api",
});

export default API;