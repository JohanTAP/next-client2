const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ERROR_MESSAGES: Record<number, string> = {
  404: 'Credenciales inválidas. Verifica tu usuario y contraseña.',
  403: 'No puedes iniciar sesión, este usuario está deshabilitado.',
  500: 'Error del servidor. Por favor, inténtalo de nuevo más tarde.',
};

export const login = async (username: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/auth/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorMessage = ERROR_MESSAGES[response.status] || `Error inesperado. Código de respuesta: ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data.token || !data.usuario) {
      throw new Error('La respuesta de autenticación es inválida. Falta el token o el usuario.');
    }

    return data;
  } catch (error) {
    console.error("Error en la solicitud de login:", error);
    throw error;
  }
};

export const logout = async (token: string) => {
  try {
    const response = await fetch(`${API_URL}/auth/logout/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorMessage = ERROR_MESSAGES[response.status] || `Error inesperado. Código de respuesta: ${response.status}`;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("Error en la solicitud de logout:", error);
    throw error;
  }
};