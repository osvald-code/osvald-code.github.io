"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import CustNavBar from "@/components/customnav"
import { Home, NotebookPen, Binary, Cpu, Smile} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DecryptedText from "@/components/ui/DecryptedText";
import CustomFooter from "@/components/customfooter";
import Particles from "@/components/Particles";

export default function AboutMe() {
    const [mounted, setMounted] = useState(false);
    const [dark, setDark] = useState(false);
  
    // Mount‑only effect to hydrate theme from localStorage
    useEffect(() => {
      setMounted(true);
      const stored = localStorage.getItem("theme");
        const prefersDark = true; //stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches); //need to configure light mode
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
      <main className="min-h-screen text-neutral-900 antialiased dark:text-neutral-100 transition-colors duration-300 font-sans">
        <header className="flex px-2 sm:px-6 py-4 md:px-10 center">
          <CustNavBar className="flex items-center w-[100%]" pageName="projects" isDark={dark} toggleTheme={toggleTheme}/>
        </header>
      <Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={250}
        particleSpread={15}
        speed={0.05}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
      <div className="mx-2 sm:mx-20 my-4 min-h-[100%] items-center justify-center">
        <h1 className="text-2xl sm:text-5xl lg:text-7xl py-4 flex justify-center items-center text-center">projects</h1>
        <div className="w-[100%] min-h-[100%] flex order grid gird-cols-1 md:grid-cols-2 p-4 lg:p-10 lg:mx-5 items-center justify-center gap-4">
            {projects.map((projects) =>
              (
                <Card key={projects.title} className="relative min-w-[100%] md:min-w-auto h-auto md:min-h-170 lg:min-h-160 border justifty-center items-center dark:bg-zinc-950/50 text-center">
                        <h1 className="static top-0 text-xl sm:text-2xl lg:text-4xl">{projects.title}</h1>
                        <p className="text-lg md:text-2xl lg:text-2xl px-5 mb-4 text-start">{projects.description}</p>
                        <Link href={projects.url} target="_blank" className="absolute bottom-0 py-3 hover:underline flex items-center whitespace-nowrap">
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
    url: "https://github.com/osvald-code/MTG-twitter-bot",
    description: "a python based project utilizing Google Cloud Scheduler to daily post an API extracted trading card to Twitter. this project was able to post images to twitter before image posting was officially available on twitter api v2. this project also filtered out over-duplicated and atypical format cards, as well as combining multi-image cards into a single image", 
  },
  {
    title: "arduino loop switcher",
    url: "https://github.com/osvald-code/arduino-loop-switcher",
    description: "a C++ based project, this signal controller used an ardunino connected to an 8 channel optical relay to allow dynamic circuit paths for a guitar pedal signal chain. this also allowed for presets to be save and loaded via the EEPROM", 
  },
    {
    title: "GBA Platformer",
    url: "https://github.com/osvald-code/GBA-Platformer",
    description: "while only in its early stages, this C based project uses the devkitARM toolchain to render, move, and animate bitmap tiles them within a GBA emulator.", 
  },
  {
    title: "Automation Framework",
    url: "./projects",
    description: "this was a propriety project creating for the Canadian Federal Government. it involved the planning, development, deployment, maintenance, and training of a Function Testing Automation Framework. created to equip low-code developers to quickly and accurately develop UI based functional testing, this project cut development time from 1.5 months to 5 days", 
  },
];