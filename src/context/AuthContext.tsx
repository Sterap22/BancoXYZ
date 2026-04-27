import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface AuthContextType {
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  resetTimer: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const INACTIVITY_TIME = 15 * 60 * 1000; // 15 min -- esto se puede cambiar si es necesario

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    loadToken();
  }, []);

  const loadToken = async () => {
    const stored = await AsyncStorage.getItem("token");
    if (stored) setToken(stored);
    setLoading(false);
  };

  const resetTimer = () => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      console.log("Sesión cerrada por inactividad");
      logout();
    }, INACTIVITY_TIME);
  };

  const login = async (newToken: string) => {
    await AsyncStorage.setItem("token", newToken);
    setToken(newToken);
    resetTimer();
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, resetTimer, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);