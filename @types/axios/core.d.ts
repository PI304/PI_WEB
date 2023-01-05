import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface GenericInstance extends AxiosInstance {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T>;
  put<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T>;
  patch<T, U>(url: string, data: U, config?: AxiosRequestConfig): Promise<T>;
}
