// src/types/card.types.ts
// define all TypeScript types for cards

export interface CardType {
    id: string;
    bank: string;
    subtitle?: string;
    lastFour: string;
    gradient: string;
    icon: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
}

export interface ApiError {
    message: string;
    status: number;
}


// well understood: here <T> is a basically a placeholder for object properties of ApiResponse
// because we don't know what type of data we're getting from Api response so we're leaving a "generic type"
// which works as placeholder and we can replace later on with proper Types/interface
// this concept is called "generic type parameter"
/*
interface User {
  id: number;
  name: string;
  email: string;
}

// The generic type T is specified as 'User'
const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
  },
};
*/
