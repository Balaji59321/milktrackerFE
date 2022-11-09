import axios from "axios";

const instance = axios.create({
  baseURL: "https://milk-manager-be.herokuapp.com/",
});

export default instance;