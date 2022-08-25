import axios from "axios";
import type { Method, AxiosRequestHeaders } from "axios";
import { ref } from "vue";
import router from "@/router";
axios.defaults.baseURL = "http://localhost:3333";
axios.defaults.baseURL += "/api";

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      return router.push("/login");
    }
    return Promise.reject(error);
  }
);

interface ResponseInterface {
  data: string | object;
  message: string;
  status: number;
  errorData: string | object;
  error: boolean;
}

interface ErrorInterface {
  response: {
    data: {
      data: object;
      error: {
        message: string;
        message_code: string;
      };
      message: string;
    };
    status: number;
  };
  message: string;
}

export function useHttp() {
  const apiVersion = "v1";
  const loading = ref(false);

  const headers: AxiosRequestHeaders = {};

  function initAuth() {
    const token = localStorage.getItem("token");
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("Missing token");
    }
  }

  async function fetch<DT = any, PT = any>({
    method,
    version = apiVersion,
    url,
    data,
    params,
    auth = true,
    delay = 0,
  }: {
    method: Method;
    version?: string;
    url: string;
    data?: DT;
    params?: PT;
    auth?: boolean;
    delay?: number;
  }): Promise<any> {
    loading.value = true;
    if (auth) {
      initAuth();
    }

    if (delay) {
      // Fake delay
      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    const response: ResponseInterface = {
      data: "",
      message: "",
      status: 0,
      errorData: "",
      error: false,
    };

    try {
      const res = await axios({
        method,
        url: `/${version}/${url}`,
        data,
        params,
        headers,
      });
      response.data = res.data;
      response.status = res.status;
    } catch (e: any) {
      const res = e as ErrorInterface;
      if (res?.response) {
        response.data = res.response.data?.data;
        response.message = res.message;
        response.status = res.response.status;
        response.error = true;
        response.errorData =
          res.response.data?.error || res.response.data?.message;
      }
    }

    loading.value = false;
    return response;
  }
  return { apiVersion, loading, fetch };
}
