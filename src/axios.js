import axios from "axios";

const instance = axios.create({
  baseURL: "https://money-manager-api-q3o8.onrender.com/",
});

export default instance;