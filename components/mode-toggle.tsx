"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle ()
{
  const { theme, setTheme } = useTheme()

  const toggleTheme = () =>
  {
    setTheme( theme === "light" ? "dark" : "light" )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={ toggleTheme }
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
    >
      <Sun className="h-6 w-6 hidden dark:block" />
      <Moon className="h-6 w-6 block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
