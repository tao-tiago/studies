import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { setTokensCookie } from './setTokensCookie';

let failedRequestQueue: {
  onSuccess: (token: string) => void;
  onError: (error: AxiosError<unknown, any>) => void;
}[] = [];
let isRefreshing = false;
let cookies = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies['nextauth.token']}`
  }
});

api.interceptors.response.use(response => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    if (error.response.data?.code === "token.expired") {
      cookies = parseCookies();

      const { "nextauth.refreshToken": oldRefreshToken } = cookies;
      const originalConfig = error.config;

      if (!isRefreshing) {
        isRefreshing = true;

        // New token and refreshToken
        api.post("/refresh", {
          refreshToken: oldRefreshToken
        }).then(({ data }) => {
          const { token, refreshToken } = data;
          setTokensCookie({ token, refreshToken });

          api.defaults.headers["Authorization"] = `Bearer ${token}`;

          failedRequestQueue.forEach(request => request.onSuccess(token));
          failedRequestQueue = [];
        }).catch(error => {
          failedRequestQueue.forEach(request => request.onError(error));
          failedRequestQueue = [];
        }).finally(() => {
          isRefreshing = false;
        })
      }

      return new Promise((resolve, reject) => {
        failedRequestQueue.push({
          onSuccess: (token: string) => {
            originalConfig.headers['Authorization'] = `Bearer ${token}`
            resolve(api(originalConfig))
          },
          onError: (error: AxiosError) => {
            reject(error)
          }
        })
      })
    } else {
      // deslogar
    }
  }

  return Promise.reject(error)
})