import axios from 'axios';

export const API_URL = `https://sahar.ngrok.io/api`

const $api = axios.create({

    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`
    return config;
})

export default $api;