"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CustNavBar from "@/components/customnav"
import { Home, NotebookPen, Binary, Cpu} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DecryptedText from "@/components/ui/DecryptedText";
import Image from "next/image";
import logo from "../img/osvalddevlogo.png";
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
  <CustNavBar className="flex items-center w-[100%]" pageName="aboutme" siteLinks={siteLinks} isDark={dark} toggleTheme={toggleTheme}/>
</header>
<Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      <Card className="mx-2 sm:mx-20 my-4 flex flex-col items-center lg:shadow-xl shadow-black/50 justify-center min-h-[100%] lg:min-h-[calc(90vh-4rem)] dark:bg-slate-800/10"> 
        <div className="flex flex-col text-center text-2xl items-center mt-4 p-5">
          <h1 className="text-4xl font-bold py-4">about me</h1>
          <h2 className="text-2xl font-bold py-2 ">"hey, you made it!"</h2>
          <p>my name is michael osvald</p> 
          <p>im a programmer driven by a passion for learning and personal development.</p>
          <p>&apos;honing my craft&apos;, as it were.</p> 
          <p>i believe in pursuing excellence, sharing knowledge, authenticity,and transparency.</p>
          <p>this site has been created be a showcase of myself, including my projects, experiments, and some of my internal contemplations.</p>
          <h3 className ="text-2xl font-bold py-2" >have fun!</h3>
        </div>
        <Image src={logo} alt="cartoonOfDev" className="rounded-full mt-4 w-[30%]"/>
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
    title: "projects",
    url: "/projects",
    icon: <Binary/>,
  },
  {
    title: "blog",
    url: "/blog",
    icon: <NotebookPen/>,
  },
];