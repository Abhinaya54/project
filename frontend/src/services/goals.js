import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://for-orcin.vercel.app/api";

export async function createGoal(goal) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_BASE_URL}/goals`, goal, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to create goal";
  }
}

export async function getGoals() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_BASE_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to fetch goals";
  }
}
