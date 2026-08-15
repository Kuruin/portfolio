'use client'
import { MoonStar, Sun } from "lucide"
import { MorphIcon } from "morphicons/react"
import { useState } from "react"

export const ThemeToggle = () => {
    const [open, setOpen] = useState(false)
    return <div>
        <button className="flex items-center fixed right-6 top-6 justify-center text-neutral-500 size-10 rounded-full bg-[#f5f5f4]" onClick={() => setOpen(o => !o)} aria-expanded={open}>
            <MorphIcon className="size-5" icon={open ? Sun : MoonStar} />
        </button>
    </div>
}