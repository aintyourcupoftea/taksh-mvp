import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.109:8000';
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const getProjects = (params) => api.get(`/api/level/2/projects/`, { params });
export const getProject = (id) => api.get(`/api/level/${id}/projects/`);