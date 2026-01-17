import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://back-ecru-psi.vercel.app";

export async function login(email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    throw error.response?.data?.detail || "Login failed";
  }
}
