import axios from 'axios';

export const API_URL = `https://85.172.205.198:4000/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//     return config;
// })

export default $api;