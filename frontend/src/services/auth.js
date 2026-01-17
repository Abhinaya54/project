import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://back-ecru-psi.vercel.app";

export async function login(email, password) {
  try {
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);

    const response = await axios.post(`${API_BASE_URL}/auth/login`, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data; // should contain access_token
  } catch (error) {
    throw error.response?.data?.detail || "Login failed";
  }
}
