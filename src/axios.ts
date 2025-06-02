import axios, { AxiosRequestConfig} from 'axios';
import {getToken} from "./util/common.ts";

export const client = axios.create({
    baseURL:'/api',
})


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
