// src/types/card.types.ts
// define all types for cards

export interface CardType {
  id: string;              // Unique ID (will come from database)
  bank: string;            // Bank name
  subtitle?: string;       // Optional subtitle
  lastFour: string;        // Last 4 digits
  gradient: string;        // CSS gradient for styling
  icon: string;            // Emoji icon
};

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
};

export interface ApiError {
  message: string;
  status: number;
};