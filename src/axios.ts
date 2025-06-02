import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {clearToken, getRefreshToken, getToken, setAccessToken} from "./util/common.ts";

const baseURL =
    import.meta.env.MODE === 'development'
        ? '/api'
        : 'http://ec2-3-39-239-224.ap-northeast-2.compute.amazonaws.com:8080';

export const client = axios.create({
    baseURL
})

// 토큰 재발급 요청 함수 (별도의 axios 인스턴스 사용)
const refreshAccessToken = async () => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) throw new Error('No refresh token');
    // refresh 요청에는 interceptors가 적용되지 않도록 별도 인스턴스 사용
    const refreshClient = axios.create();
    const res = await refreshClient.post('/auth/refresh', {refreshToken})
    setAccessToken(res.data.accessToken,'at');
    setAccessToken(res.data.refreshToken,'rt');

    return res.data.accessToken;
};

// 응답 인터셉터 (401 처리, 1회만 재시도)
client.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        // refresh 요청에는 재시도하지 않음
        if (originalRequest.url?.includes('/auth/refresh')) {
            return Promise.reject(error);
        }

        // 401 에러 & 아직 재시도 안 했을 때만
        if (!originalRequest.url?.includes('/auth/refresh') && error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newAccessToken = await refreshAccessToken();
                originalRequest.headers = {
                    ...originalRequest.headers,
                    authorization: `Bearer ${newAccessToken}`,
                };
                return client(originalRequest);
            } catch (refreshError) {
                // refreshToken도 만료된 경우
                window.location.href = "/";
                clearToken();
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

client.interceptors.request.use(async (config) => {
    const token = getToken();
    if (token) {
        config.headers!.authorization = `Bearer ${token}`;
    }
    config.headers!.Accept = 'application/json';
    return config;
});


export const Get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return client.get(url, config);
};

export const Post = async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    return client.post(url, data, config);
};

export const Put = async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    return client.put(url, data, config);
};

export const Delete = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return client.delete(url, config);
};
