import axios from "axios";

const api = axios.create({
  baseURL: "https://bentoveda-early-access.onrender.com/api",
});

export default api;
