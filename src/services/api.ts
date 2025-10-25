// src/services/api.ts
// API client for communicating with backend
// All API calls go through here

import { API_BASE_URL } from "../utils/constants";
import type { ApiResponse, ApiError } from "../types/card.types";

class ApiClient {
    private baseURL: string;
    private token: string | null = null;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
        this.token = localStorage.getItem('authToken') || null;
    };

    // set auth token when user logs in
    setToken(token: string): void {
        this.token = token;
        localStorage.setItem('authToken', token);
    };

    // remove token when user logs out
    removeToken(): void {
        this.token = null;
        localStorage.removeItem('authToken');
    };

    // build headers with authorization
    private getHeaders(): HeadersInit {
        const headers: HeadersInit = {
            'Content-Type': 'application/json'
        };

        // add token if user is logged in
        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        };

        return headers;
    };

    // generic get request
    async get<T>(endpoint: string): Promise<T> {
        try {
            const url = `${this.baseURL}${endpoint}`;
            console.log(`GET ${url}`); // for debugging

            const response = await fetch(url, {
                method: 'GET',
                headers: this.getHeaders()
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}; ${response.statusText}`);
            }

            const data: ApiResponse<T> = await response.json();
            console.log('Response:', data); // for debugging

            return data.data;
        } catch (error) {
            console.error('Api Error;', error);
            throw error;
        };
    };

    async post<T>(endpoint: string, body: any): Promise<T> {
        try {
            const url = `${this.baseURL}${endpoint}`;
            console.log('POST ${url}', body);

            const response = await fetch(url, {
                method: 'POST',
                headers: this.getHeaders(),
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            };

            const data: ApiResponse<T> = await response.json();
            console.log('Response:', data);

            return data.data;
        } catch (error) {
            console.error('API Error', error);
            throw error;
        };
    };

    async put<T>(endpoint: string, body: any): Promise<T> {
        try {
            const url = `${this.baseURL}${endpoint}`;
            console.log(`PUT ${url}`, body);

            const response = await fetch(url, {
                method: 'PUT',
                headers: this.getHeaders(),
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data: ApiResponse<T> = await response.json();
            console.log('Response:', data);

            return data.data;
        } catch (error) {
            console.error('API Error', error);
            throw error;
        };
    }

    async delete<T>(endpoint: string): Promise<T> {
        try {
            const url = `${this.baseURL}${endpoint}`;
            console.log(`DELETE ${url}`);

            const response = await fetch(url, {
                method: 'DELETE',
                headers: this.getHeaders(),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            };

            const data: ApiResponse<T> = await response.json();
            console.log('Response:', data);

            return data.data;

        } catch (error) {
            console.error('API Error', error);
            throw error;
        };
    };
};

export const apiClient = new ApiClient(API_BASE_URL);