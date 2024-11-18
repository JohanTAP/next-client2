"use client";

import React from "react";
import { use } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import DashboardContent from "./DashboardContent";
import DashboardLayout from "../dashboard/DashboardLayout";

export default function DashboardPage ( { params }: { params: Promise<{ rol: string }> } )
{
    const { token, userInfo } = useAuth();
    const router = useRouter();

    const { rol } = use( params );

    useEffect( () =>
    {
        if ( userInfo && userInfo.rol.tipo_usuario !== rol )
        {
            router.push( "/403" );
        }
    }, [ userInfo, rol, router ] );

    if ( !userInfo )
    {
        return <p>Cargando...</p>;
    }

    return (
        <DashboardLayout>
            <div className="flex-1 overflow-y-auto">
                <h2 className="text-3xl font-bold mb-6">{ DashboardContent[ rol ]?.welcomeMessage }</h2>
                <div className="bg-foreground p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-background">Información del Usuario:</h3>
                    <div className="bg-background p-4 rounded">
                        <p><strong>Token:</strong> { token }</p>
                        <p><strong>ID:</strong> { userInfo.id }</p>
                        <p><strong>Usuario:</strong> { userInfo.username || "Sin nombre" }</p>
                        <p><strong>Rol:</strong> { userInfo.rol.tipo_usuario || "Sin rol" }</p>
                        <p><strong>Estado:</strong> { userInfo.is_habilitado ? "Habilitado" : "Deshabilitado" }</p>
                        <p><strong>Sucursal:</strong> { userInfo.ubicacion_empresa.sucursal || "Sin sucursal" }</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
