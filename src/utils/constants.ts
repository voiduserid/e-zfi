// src/utils/constants.ts
// central place for API endpoints and configuration

// API BASE URL (will change based on environment)
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5731/api';

// API ENDPOINTS - Match these with your backend!
export const ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  
  // Cards - These are the endpoints we'll build
  CARDS: {
    GET_ALL: '/cards',
    GET_ONE: (id: string) => `/cards/${id}`,
    CREATE: '/cards',
    UPDATE: (id: string) => `/cards/${id}`,
    DELETE: (id: string) => `/cards/${id}`,
  },
};

// Other constants
export const APP_NAME = 'Wallet';
export const APP_VERSION = '1.0.0';