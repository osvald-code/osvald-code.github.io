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
          <CustNavBar className="flex items-center w-[100%]" pageName="projects" isDark={dark} toggleTheme={toggleTheme}/>
        </header>
      <Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      <div className="mx-2 sm:mx-20 my-4 min-h-[100%] items-center justify-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl py-4 flex justify-center items-center text-center">projects</h1>
        <div className="w-[100%] min-h-[100%] flex order grid gird-cols-1 sm:grid-cols-2 p-4 items-center justify-center gap-4">
            {projects.map((projects) =>
              (
                <Card key={projects.title} className="relative min-w-[100%] h-100 border items-center dark:bg-slate-800/0 text-center">
                        <h1 className="static top-0 text-xl sm:text-2xl lg:text-3xl">{projects.title}</h1>
                        <p className="text-lg px-5 text-start">{projects.description}</p>
                        <Link href={projects.url} className="absolute bottom-0 py-3 hover:underline flex items-center whitespace-nowrap">
                              github
                        </Link>
                </Card>
              ))
            }           
        </div>
      </div>
      <CustomFooter/>
    </main>
  );
}

const projects: { title: string; url: string; description: string}[] = [
  {
    title:"python twitter bot",
    url: "/.",
    description: "a python based project utilizing Google Cloud Scheduler to daily post an API extracted trading card to Twitter. this project was able to post images to twitter before image posting was officially available on twitter api v2. this project also filtered out over-duplicated and atypical format cards, as well as combining multi-image cards into a single image", 
  },
  {
    title: "arduino loop switcher",
    url: "/.",
    description: "a C++ based project, this signal controller used an ardunino connected to an 8 channel optical relay to allow dynamic circuit paths for a guitar pedal signal chain. this also allowed for presets to be save and loaded via the EEPROM", 
  },
    {
    title: "GBA Platformer",
    url: "/.",
    description: "while only in its early stages, this C based project uses the devkitARM toolchain to render, move, and animate bitmap tiles them within a GBA emulator.", 
  },
  {
    title: "Project 4",
    url: "/.",
    description: "this is a placeholder description", 
  },
];