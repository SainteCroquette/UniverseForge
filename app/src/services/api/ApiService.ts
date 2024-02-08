import axios from 'axios';

export default class ApiService {
    private readonly _axiosInstance = axios.create({});
    // http methods wrapper
    public async get<T>(url: string, params?: unknown): Promise<T> {
        const response = await this._axiosInstance.get(url, { params });

        return response.data ?? null;
    }

    public async post<T>(url: string, data?: unknown): Promise<T> {
        const response = await this._axiosInstance.post(url, data);

        return response.data ?? null;
    }

    public async put<T>(url: string, data: unknown): Promise<T> {
        const response = await this._axiosInstance.put(url, data);

        return response.data ?? null;
    }

    public async delete<T>(url: string): Promise<T> {
        const response = await this._axiosInstance.delete(url);

        return response.data ?? null;
    }

    public async patch<T>(url: string, data: unknown): Promise<T> {
        const response = await this._axiosInstance.patch(url, data);

        return response.data ?? null;
    }
}