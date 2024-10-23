import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecurity = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        await logOut();
        navigate("/login");
        return Promise.reject(err);
      }
    }
  );

  return axiosSecure;
};

export default useAxiosSecurity;
