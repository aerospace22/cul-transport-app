import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

const baseURLS = {
  prod: "https://pbarapp-api-production.up.railway.app/api/v1",
  local: "http://localhost:3000/api/v1",
};

const instance: AxiosInstance = axios.create({
  // @ts-ignore
  baseURL: baseURLS["prod"],
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    /**
     * Set Headers
     */
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      const { status } = error.response;

      if (status === 500) {
        console.error({
          message: "Error",
          description: "Server error occured!",
        });
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
