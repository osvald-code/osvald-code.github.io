"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CustNavBar from "@/components/customnav"
import { Home, NotebookPen, Binary, Cpu} from "lucide-react";
import { Card } from "@/components/ui/card";
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
  <CustNavBar className="flex items-center w-[100%]" pageName="about_me" siteLinks={siteLinks} isDark={dark} toggleTheme={toggleTheme}/>
</header>
<Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-lg mt-4">This is the About Me page.</p>
    </main>
  );
}


const siteLinks: { title: string; url: string; icon: React.ReactNode }[] = [
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