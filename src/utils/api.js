import axios from 'axios';

export const API_URL = `https://c7f3-2-84-140-131.ngrok-free.app/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//     return config;
// })

export default $api;