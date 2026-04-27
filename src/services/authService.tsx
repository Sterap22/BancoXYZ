
import { api } from "../api/client";
import { LoginRequest, LoginResponse } from "../types/auth";

export const loginService = async (
  body: LoginRequest
): Promise<LoginResponse> => {

  const res = await api.post<LoginResponse>(
    "https://qf5k9fspl0.execute-api.us-east-1.amazonaws.com/default/login",
    JSON.stringify(body)
  );
  console.log(res.data,' Datos de respuesta');
  
  return res.data;
};