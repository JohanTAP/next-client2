import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import
    {
        Breadcrumb,
        BreadcrumbItem,
        BreadcrumbLink,
        BreadcrumbList,
        BreadcrumbPage,
        BreadcrumbSeparator,
    } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import
    {
        SidebarInset,
        SidebarProvider,
        SidebarTrigger,
    } from "@/components/ui/sidebar";

import { ReactNode } from "react";

export default function DashboardLayout ( { children }: { children: ReactNode } )
{
    return (
        <SidebarProvider>
            <AppSidebar className="shrink-0 w-64" />
            <div className="relative flex min-h-screen flex-1 flex-col bg-background peer-data-[variant=inset]:min-h-[calc(100vh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow p-4 overflow-hidden">
                <SidebarInset>
                    <header className="flex h-16 items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="flex-1">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Building Your Application
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <ModeToggle />
                    </header>
                    <main className="flex-1 overflow-y-auto p-4">
                        { children }
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}
