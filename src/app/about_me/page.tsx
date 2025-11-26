"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CustNavBar from "@/components/customnav"
import { Home, NotebookPen, Binary, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DecryptedText from "@/components/ui/DecryptedText";
import Image from "next/image";
import logo from "../img/osvalddevlogo.png";
import CustomFooter from "@/components/customfooter";
import GitHubCalendar from 'react-github-calendar';
import Particles from "@/components/Particles";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Mount‑only effect to hydrate theme from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark =
      true; //stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches); //need to configure colour
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);

    // Scroll listener
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <header className={`flex px-2 sm:px-6 py-4 md:px-10 rounded-b-lg sticky top-0 transition-all duration-300
    ${scrolled ? "bg-zinc-900/80" : "bg-blue-300/0"}`}>
        <CustNavBar className="flex items-center w-[100%]" pageName="about_me" isDark={dark} toggleTheme={toggleTheme} />
      </header>
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
      <Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]" />
      <Card className="mx-2 sm:mx-20 my-4 flex flex-col items-center lg:shadow-xl shadow-black/50 justify-center min-h-[100%] lg:min-h-[calc(90vh-4rem)] dark:bg-slate-800/10">
        <div className="flex flex-col text-center text-xl items-center mt-4 p-3 sm:p-5">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl py-4 font-bold flex justify-center items-center text-center">about me</h1>
          <p>ooooo looks like you're curious!</p>
          <p>My name is Michael Osvald. I'm currently a Software Deveploper Engineering in Test (SDET), based out of Ontario, Canada. 
            My background is in computer programming, and I've taken those principles into the world of Automated Testing.
            Currently, my role involves a mixture of creating, developing, and maintaining an Automation Framework, building and customizing testing tools,
            maintainting an automation infrastructure, and working with QA Analysts, QA testers, and consultants to provide a robust and high-quality testing experience.
            <br/><br/>
            Beyond the workplace, I'm slowly amassing a collection of incomplete projects to tinker away at whenever I'm not spending time with my lovely spouse, our cat, and playing electric guitar.
            Pleased to meet you!
          </p>
          {/* TO DO: improve design of this UI */}
          <p>ABSTRACT THINKING: 5</p>
          <p>CODE QUALITY: 5</p>
          <p>CRITICAL REASONING: 4</p>
          <p>INITIATIVE: 4</p>
          <p>MEMORIZATION: 3</p>
          <p>TEAM PLAYER: 4</p>
          <p>TIME MANAGEMENT: 4</p>
          <p>APTITUDE: 5</p>
        </div>
        <div className="w-full bg-zinc-900/30 mt-4 p-3 sm:p-5">
          <div className="flex justify-center w-full">
            <ScrollArea className="w-full">
              <div className="flex items-center justify-center">
                <GitHubCalendar username="osvald-code" />
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        <Image src={logo} alt="cartoonOfDev" className="rounded-full mt-4 w-[30%]" />
      </Card>
      <CustomFooter />
    </main>
  );
}

