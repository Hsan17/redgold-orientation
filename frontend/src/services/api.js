const API_URL = "http://127.0.0.1:5000";

export async function fetchData() {
    const response = await fetch(`${API_URL}/api/data`);
    const data = await response.json();
    return data;
}
