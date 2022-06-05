import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

export type Res<T> = Promise<AxiosResponse<T>>


axiosService.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzUwOTFkZTQzNjdjMDBkNzg3MjZjNWZkNmYyMjZjZSIsInN1YiI6IjYyOTRkNDgwYTQxMGM4MTVhNDAzOGM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OT7gm44VYdFO2BsP9jphtITrHlbrrIM9VooMkgMWLac';
    config.headers!.Authorization = `Bearer ${token}`
    return config
})



export {
    axiosService
}