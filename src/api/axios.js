import axios from "axios";

const baseURL = "https://robot-shortener.herokuapp.com/api/"

const axiosInstance = axios.create({
    baseURL: baseURL
})

export default axiosInstance