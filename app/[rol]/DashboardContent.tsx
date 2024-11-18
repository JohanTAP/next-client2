import { Home, User, Settings, Shield, Users, ClipboardList, FileText, File, Zap, Printer, DollarSign } from "lucide-react";

const DashboardContent: Record<string, { welcomeMessage: string, menuItems: { label: string, href: string, icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] }> = {
    ADMINISTRADOR: {
        welcomeMessage: "Bienvenido, Administrador",
        menuItems: [
            { label: "Inicio", href: "/ADMINISTRADOR", icon: Home },
            { label: "Perfil", href: "/profile", icon: User },
            { label: "Configuración", href: "/settings", icon: Settings },
            { label: "Herramientas Admin", href: "/admin-tools", icon: Shield }
        ]
    },
    RECEPCIONISTA: {
        welcomeMessage: "Bienvenido, Recepcionista",
        menuItems: [
            { label: "Inicio", href: "/RECEPCIONISTA", icon: Home },
            { label: "Pacientes", href: "/patients", icon: Users },
            { label: "Doctores - Clínicas", href: "/doctors-clinics", icon: ClipboardList },
            { label: "Boletas", href: "/invoices", icon: FileText },
            { label: "Órdenes", href: "/orders", icon: File },
            { label: "Rx Físicas", href: "/physical-rx", icon: Zap },
            { label: "Impresiones 3D", href: "/3d-prints", icon: Printer },
            { label: "Prestaciones", href: "/services", icon: Shield },
            { label: "Caja Inicial", href: "/initial-cash", icon: DollarSign }
        ]
    }
};

export default DashboardContent;
