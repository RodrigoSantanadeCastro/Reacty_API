const API_HOST = 'http://dattebayo-api.onrender.com';

export default async function fetchCaracters() {
    try { 
        const response = await fetch(`${API_HOST}/characters`); 
        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`); 
        }
        return await response.json();
    } catch (error) {
        console.log("Erro ao buscar personagens:", error);
        return [];
    }
}