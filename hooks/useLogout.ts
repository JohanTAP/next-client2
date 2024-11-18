"use client";

import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { logout } from '@/services/authService';

export const useLogout = () => {
  const { token, setToken } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      if (token) {
        await logout(token);
      }
      setToken(null, null);
      router.push('/');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return { handleLogout };
};
