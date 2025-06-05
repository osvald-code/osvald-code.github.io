"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { posts } from "./mdx-page/posts";
import { Cpu} from "lucide-react";
import { Card} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DecryptedText from "@/components/ui/DecryptedText";
import CustNavBar from "@/components/customnav";
import CustomFooter from "@/components/customfooter";
import Particles from "@/components/Particles";


export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  // Mount‑only effect to hydrate theme from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
    <main className="min-h-screen text-neutral-900 antialiased  dark:text-neutral-100 transition-colors duration-300 font-sans">      
      <header
  className={`flex px-2 sm:px-6 py-4 md:px-10 rounded-b-lg sticky top-0 transition-all duration-300
    ${scrolled ? "bg-zinc-900/80" : "bg-zinc-950/0"}`}
>
        <CustNavBar className="flex items-center w-[100%]" pageName="home" isDark={dark} toggleTheme={toggleTheme}/>
      </header>
    
    {/*glitch effect for background*/}
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
      <Particles
        particleColors={dark?['#ffffff', '#ffffff']:['#222222', '#222222']}
        particleCount={250}
        particleSpread={15}
        speed={0.05}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
      <Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      
      <Card className="w-[90%] mx-auto sm:mx-auto my-35 sm:my-5 py-30 sm:py-2 sm:min-h-100 md:min-h-150 sm:px-15 sm:w-fit sm:min-w-[80%] flex flex-col items-center lg:shadow-xl shadow-black/50 justify-center min-h-[100%] lg:min-h-[calc(90vh-4rem)] dark:bg-zinc-950/50">
        <div className="flex flex-col items-center justify-center">
          {/* there is sort of a string con-cat happening here -> text is '[osvald::dev]' */}
          <p className="hidden sm:block text-3xl lg:text-5xl mr-auto px-30">
            <DecryptedText text="welcome to:"/>
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-9xl text-center flex p-2"> 
            [<Cpu className = "py-1 w-12 h-12 md:w-22 md:h-22 lg:w-35 lg:h-35"/><DecryptedText text="svald::dev" />]
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl sm:ml-auto px-2 sm:px-30">
            <DecryptedText text="coding solutions"/>
          </p>         
        </div>
      </Card>
      <div className="flex flex-col items-center bg-zinc-900/25 mt-10 w-[100%] justify-center">
       <div className="flex flex-col text-center sm:text-start text-xl sm:mx-15 p-3 sm:px-15">
          <h2 className="text-2xl font-bold py-3 text-center ">hey, you made it!</h2>
          <p>my name is michael osvald</p> 
          <p>im a programmer driven by a passion for learning and personal development.</p>
          <p>"honing my craft" - as it were.</p> 
          <p>i believe in pursuing excellence, sharing knowledge, authenticity, and transparency.</p>
          <p>this site has been created be a showcase of myself, including my projects, experiments, and some of my internal contemplations.</p>
          <h3 className ="text-2xl font-bold py-2" >have fun!</h3>
        </div>
      </div>
      <section className="flex flex-col py-5 items-center gap-1 pb-20">
        <div className="w-[min(100%,70rem)] px-4">
          <h2 className="text-lg text-center font-semibold mb-6">recent posts</h2>
          <div className="grid text-center sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {posts.slice(0,3).map((blog) => (
              <Link
                key={blog.name}
                href={"blog/?postName=" + blog.name}
                className="block rounded-xl overflow-hidden shadow transition hover:shadow-md dark:shadow-white/10"
              >
                {/* leaving this here incase i decide to add images <img src={blog.image} alt=""className="w-full h-40 object-cover"/> */}
                <div className="p-4 bg-white dark:bg-neutral-900/80">
                  <h3 className="font-medium font-text-base mb-1 line-clamp-2">
                    {blog.name}
                  </h3>
                  <p className="text-xs text-neutral-500">{blog.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CustomFooter/>
    </main>
  );
}

