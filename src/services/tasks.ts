import { fetchApi } from "./api";

export const onfetchTasks = async () => {
    const data = await fetchApi.get('/tasks');
    return data?.data.tasks;
} 