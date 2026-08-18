"use client";
import { MoonStar, Sun } from "lucide";
import { MorphIcon } from "morphicons/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { cn } from "../lib/util";

export const ThemeToggle = () => {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <div>
            <button
                className={cn(
                    "flex items-center fixed right-6 top-6 justify-center size-10 rounded-full bg-[#f5f5f4]/80 backdrop-blur-md border border-neutral-200/50 shadow-sm cursor-pointer active:scale-95 transition-all duration-200 ease-out",
                    "dark:bg-[#121212]/80 dark:border-neutral-800/80",
                )}
                onClick={() => {
                    setOpen((o) => !o);
                    handleThemeToggle();
                }}
                aria-expanded={open}
            >
                <MorphIcon
                    className={cn(
                        "size-5 text-neutral-500 hover:text-neutral-900 transition-colors duration-200",
                        "dark:hover:text-[#f5f5f4] dark:text-[#f5f5f4]/70",
                    )}
                    icon={theme === "dark" ? Sun : MoonStar}
                    spring={"smooth"}
                />
            </button>
        </div>
    );
};
