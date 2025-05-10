"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, Home, NotebookPen, Binary, Cpu} from "lucide-react";
import { Card} from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import DecryptedText from "@/components/ui/DecryptedText";

export default function AboutMe() {
      const [mounted, setMounted] = useState(false);
      const [dark, setDark] = useState(false);
    
      // Mount‑only effect to hydrate theme from localStorage
      useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("theme");
        const prefersDark =
          stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
      }, []);
    
      const toggleTheme = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
      };
    
      if (!mounted) return null; // prevent hydration mismatch
    return ( 
<main className="min-h-screen text-neutral-900 antialiased dark:bg-linear-to-r from-purple-800/20 to-slate-950 dark:text-neutral-100 transition-colors duration-300 font-sans">
<header className="flex px-2 sm:px-6 py-4 md:px-10 center">

<h1 className="hidden p-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100 sm:block">
  osvald::dev(aboutme)
</h1>
<NavigationMenu className="center sm:ml-auto">
  <NavigationMenuList className="flex flex-row gap-4">
    {topSites.map((site) => (
      <NavigationMenuItem key={site.url} className="font-bold text-md sm:p-2 sm:text-xl lg:text-2xl"  >
        <Link href={site.url} className="hover:underline flex items-center whitespace-nowrap">
          <div className="pr-2">{site.icon} </div> {site.title}  
        </Link>
      </NavigationMenuItem>
  ))}
  </NavigationMenuList>
</NavigationMenu>
<Separator orientation="vertical" className="min-h-[35px] m-[5px] border-[1px] hidden sm:block" />

<button
  aria-label="Toggle Dark Mode"
  onClick={toggleTheme}
  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
>
  {dark ? <Sun size={25} /> : <Moon size={25} />}
</button>
</header>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-lg mt-4">This is the About Me page.</p>
    </main>
  );
}


const topSites: { title: string; url: string; icon: React.ReactNode }[] = [
  {
    title:"home",
    url: "/.",
    icon: <Home/>,
  },
  {
    title: "projects",
    url: "projects-coming-soon",
    icon: <Binary/>,
  },
  {
    title: "blog",
    url: "blog-coming-soon",
    icon: <NotebookPen/>,
  },
];