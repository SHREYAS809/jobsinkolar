const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchJobs() {
    try {
        const response = await fetch(`${API_URL}/jobs`);
        if (!response.ok) throw new Error("Failed to fetch jobs");
        return await response.ok ? await response.json() : [];
    } catch (error) {
        console.error("API Error:", error);
        return [];
    }
}

export async function registerUser(userData: any) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    return await response.json();
}

export async function loginUser(credentials: any) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });
    return await response.json();
}
