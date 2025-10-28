"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Moon, Sun} from "lucide-react"

const DEFAULT_THEME = "light"

export function ThemeToggle() {
    const[theme, setTheme] = useState(DEFAULT_THEME)

    useEffect(() => {
        const sevedTheme = localStorage.getItem("theme") || DEFAULT_THEME
        setTheme(sevedTheme)
        document.documentElement.classList.toggle("dark", sevedTheme === "dark")
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark")
    }
    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "ligth" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
    )
}