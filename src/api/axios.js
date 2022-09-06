import axios from "axios";

const baseURL = "https://robot-shortener.herokuapp.com/"

const axiosInstance = axios.create({
    baseURL: baseURL
})

export default axiosInstance