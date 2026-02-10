import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { user } = useAuth();
  // set token in the header for all the api call using axiosSecure hook
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      console.log(config);
      config.headers.authorization = `Bearer ${user.accessToken}`;
      return config;
    });
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);
  return instance;
};

export default useAxiosSecure;
