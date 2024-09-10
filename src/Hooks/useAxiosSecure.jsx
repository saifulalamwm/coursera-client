import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "https://coursera-server.vercel.app",
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stopped by interceptors", token);
      // Do something before request is sent
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that is not 2xx return an error
      return response;
    },
    async (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        // 401 Unauthorized
        await logout();
        navigate("/login");
        // console.log("status error", error);
        // redirect to login page
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
