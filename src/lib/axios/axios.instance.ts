import axios from "axios";

const BASE_URL = "/api";

export const fetchData = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});