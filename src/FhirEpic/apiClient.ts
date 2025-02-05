import axios from "axios";
import { refreshAccessToken } from "./oauthHelpers";

const apiClient = axios.create({
  baseURL: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
});

apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        const x = await refreshAccessToken();
        console.log("xatolik", x);

        return apiClient.request(error.config);
      } catch (refreshError) {
        console.error("Unable to refresh token:", refreshError);
        // window.location.href = "/connectingrecords";
        // alert("Unauthorized, Plese connect your records ");
      }
    }
    return Promise.reject(error);
  }
);

export { apiClient };
