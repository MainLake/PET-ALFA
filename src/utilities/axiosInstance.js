import axios from "axios"

const BASE_URL = process.env.REACT_APP_URL_API;

export const axiosInstance = axios.create({
    baseURL: BASE_URL
});