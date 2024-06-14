import axios from "axios";
import { getUserData } from "src/helper";

const privateInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_STRAPI_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

privateInstance.interceptors.request.use(
  (config) => {
    const { jwt } = getUserData();
    try {
      if (jwt) {
        config.headers["Authorization"] = "Bearer " + jwt;
      }
    } catch (err) {
      console.error(err);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      logout();
    }

    return Promise.reject(error);
  }
);

export default privateInstance;
