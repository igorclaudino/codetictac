import axios from "axios";

const api = axios.create({
    baseURL: process.env.WAKATIME_URL_TOKEN
});

export default api;
