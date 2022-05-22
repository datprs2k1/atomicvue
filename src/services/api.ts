import axios from 'axios';

export const fetchApi = axios.create({
    baseURL: 'https://api.github.com/',
});