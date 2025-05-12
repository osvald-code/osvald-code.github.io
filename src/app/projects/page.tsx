"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CustNavBar from "@/components/customnav"
import { Home, NotebookPen, Binary, Cpu, Smile} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DecryptedText from "@/components/ui/DecryptedText";
import CustomFooter from "@/components/customfooter";

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
  <CustNavBar className="flex items-center w-[100%]" pageName="projects" siteLinks={siteLinks} isDark={dark} toggleTheme={toggleTheme}/>
</header>
<Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      <Card className="mx-2 sm:mx-20 my-4 flex flex-col items-center lg:shadow-xl shadow-black/50 justify-center h-[100%] lg:h-[calc(90vh-4rem)] dark:bg-slate-800/10">
        <h1 className="text-4xl font-bold">projects</h1>
        <p className="text-lg mt-4">this is the projects page.</p>
      </Card>
      <CustomFooter/>
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
    title: "about me",
    url: "/aboutme",
    icon: <Smile/>,
  },
  {
    title: "blog",
    url: "/blog",
    icon: <NotebookPen/>,
  },
];