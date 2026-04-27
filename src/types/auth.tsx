export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}