import axios, { AxiosInstance } from "axios";
import { get_session } from "./features/authentication/actions";

axios.defaults.withCredentials = true;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the session ID in every request
axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.url?.includes("auth/login/")) {
      const session = await get_session();
      const sessionId = session.sessionId;

      if (sessionId) {
        config.headers.Authorization = `Session ${sessionId}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
