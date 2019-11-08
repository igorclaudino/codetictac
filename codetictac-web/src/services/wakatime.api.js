import axios from "axios";

const wakatimeApi = axios.create({
  baseURL: process.env.REACT_APP_WAKATIME_API_URL
});

export default wakatimeApi;
