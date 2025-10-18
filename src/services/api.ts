// src/services/api.ts
// API client for communicating with backend
// All API calls go through here

import { API_BASE_URL } from '../utils/constants';
import type { ApiResponse, ApiError } from '../types/card.types';

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    // Try to get token from localStorage (for when user is logged in)
    this.token = localStorage.getItem('authToken') || null;
  }

  // Set auth token when user logs in
  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  // Remove token when user logs out
  removeToken(): void {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  // Build headers with authorization
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Add token if user is logged in
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  // Generic GET request
  async get<T>(endpoint: string): Promise<T> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      console.log(`🔵 GET ${url}`); // For debugging
      
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ApiResponse<T> = await response.json();
      console.log('✅ Response:', data); // For debugging
      
      return data.data;
    } catch (error) {
      console.error('❌ API Error:', error);
      throw error;
    }
  }

  // Generic POST request
  async post<T>(endpoint: string, body: any): Promise<T> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      console.log(`🔵 POST ${url}`, body);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ApiResponse<T> = await response.json();
      console.log('✅ Response:', data);
      
      return data.data;
    } catch (error) {
      console.error('❌ API Error:', error);
      throw error;
    }
  }

  // Generic PUT request
  async put<T>(endpoint: string, body: any): Promise<T> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      console.log(`🔵 PUT ${url}`, body);
      
      const response = await fetch(url, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ApiResponse<T> = await response.json();
      console.log('✅ Response:', data);
      
      return data.data;
    } catch (error) {
      console.error('❌ API Error:', error);
      throw error;
    }
  }

  // Generic DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      console.log(`🔵 DELETE ${url}`);
      
      const response = await fetch(url, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ApiResponse<T> = await response.json();
      console.log('✅ Response:', data);
      
      return data.data;
    } catch (error) {
      console.error('❌ API Error:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const apiClient = new ApiClient(API_BASE_URL);