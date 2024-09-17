import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.109:8000';
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const getLevel = (lvl) => api.get(`/api/level/${lvl}`);
export const getProjects = (lvl, id) => api.get(`/api/level/${lvl}/project/${id}`);
