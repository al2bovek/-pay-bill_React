import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL
});

export const getPlayers = () => api.get("/players");
export const addPlayer = (player) => api.post("/players", player);
export const editPlayer = (id, updatedData) => api.put(`/players/${id}`, updatedData);
export const deletePlayer = (id) => api.delete(`/players/${id}`);

