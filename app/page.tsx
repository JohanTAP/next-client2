"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage ()
{
  const {
    username,
    password,
    error,
    isLoading,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  } = useLogin();

  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-[#1c1c1c] text-white">
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">
          Bienvenido a{ " " }
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
            Tu Imagen RX
          </span>
        </h1>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 bg-[#2a2a2a] p-10 rounded-lg border border-gray-700 transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-purple-600/30 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(136,58,234,0.5)]">
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-center text-purple-300">
              Inicie sesión en su cuenta
            </h2>
            <form onSubmit={ handleSubmit } className="space-y-6 mt-8">
              <div  className="text-gray-400">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-400"
                >
                  Usuario
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Ingresa tu usuario"
                  value={ username }
                  onChange={ handleUsernameChange }
                  required
                  className="mt-1 block w-full"
                />
              </div>
              <div  className="text-gray-400">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-400"
                >
                  Contraseña
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={ password }
                  onChange={ handlePasswordChange }
                  required
                  className="mt-1 block w-full"
                />
              </div>
              { error && (
                <div className="text-red-500 text-sm text-center">{ error }</div>
              ) }
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-semibold transition duration-300"
                  disabled={ isLoading }
                >
                  { isLoading ? "Cargando..." : "Iniciar sesión" }
                </Button>
              </div>
            </form>
            <div className="text-center text-sm text-gray-400 mt-6">
              Hecho con ❤️ por{ " " }
              <Link
                href="https://agenciaideaspro.cl"
                className="relative inline-block group text-purple-400 hover:text-purple-300 transition duration-300"
              >
                <span>Agencia Ideas Pro</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
