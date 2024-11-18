"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function AccessDenied ()
{
    const { userInfo } = useAuth();

    const roleDashboardLink = userInfo ? `/${ userInfo.rol.tipo_usuario }` : "/";

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500">403 - Acceso Denegado</h1>
            <p className="mt-4 text-lg">No tienes permisos para acceder a esta página.</p>
            <Link href={ roleDashboardLink } className="mt-6 text-purple-700 hover:underline">
                Regresar al Dashboard
            </Link>
        </div>
    );
}
