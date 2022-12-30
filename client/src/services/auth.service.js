import axios from "axios";

const url = "https://tune-up-xi.vercel.app/" + "auth/";

const login = (email, password) => {
  return axios.post(url + "login", {
    email,
    password,
  });
};

const register = (name, email, password) => {
  return axios.post(url + "register", {
    name,
    email,
    password,
  });
};

const service = { login, register };
export default service;
