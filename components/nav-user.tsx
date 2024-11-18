"use client"

import
{
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  LogOut,
} from "lucide-react"

import
{
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import
{
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import
{
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { useLogout } from "@/hooks/useLogout";
import { useAuth } from "@/context/AuthContext"

function capitalizeFirstLetter ( text: string )
{
  if ( !text ) return "";
  return text.charAt( 0 ).toUpperCase() + text.slice( 1 ).toLowerCase();
}

export function NavUser ( {
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
} )
{
  const { isMobile } = useSidebar()
  const { handleLogout } = useLogout();
  const { userInfo } = useAuth();

  if ( !userInfo )
  {
    return <div>Cargando...</div>;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={ user.avatar } alt={ user.name } />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{ userInfo.username || "Sin nombre" }</span>
                { userInfo.rol.tipo_usuario ? capitalizeFirstLetter( userInfo.rol.tipo_usuario ) : "Sin rol" }
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={ isMobile ? "bottom" : "right" }
            align="end"
            sideOffset={ 4 }
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={ user.avatar } alt={ user.name } />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{ userInfo.username || "Sin nombre" }</span>
                  { userInfo.rol.tipo_usuario ? capitalizeFirstLetter( userInfo.rol.tipo_usuario ) : "Sin rol" }
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Cuenta
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notificaciones
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={ handleLogout }>
              <LogOut />
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
