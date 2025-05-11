"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Smile, NotebookPen, Binary, Cpu} from "lucide-react";
import { Card} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DecryptedText from "@/components/ui/DecryptedText";
import CustNavBar from "@/components/customnav";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Mount‑only effect to hydrate theme from localStorage
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
        <CustNavBar className="flex items-center w-[100%]" pageName="home" siteLinks={siteLinks} isDark={dark} toggleTheme={toggleTheme}/>
      </header>
      
      <Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      
      <Card className="mx-2 sm:mx-20 my-4 flex flex-col items-center lg:shadow-xl shadow-black/50 justify-center h-[100%] lg:h-[calc(90vh-4rem)] dark:bg-slate-800/10">
        <div className="flex flex-col py-12 sm:py-6 items-center justify-center">
          {/* there is sort of a string con-cat happening here -> text is '[osvald::dev]' */}
          <p className="hidden sm:block text-3xl mr-auto px-30">
            <DecryptedText text="welcome to:"/>
          </p>
          <h1 className="text-5xl sm:text-8xl lg:text-9xl text-center flex p-2"> 
            [<Cpu className = "py-1 w-15 h-15 sm:w-25 sm:h-25 lg:w-35 lg:h-35"/><DecryptedText text="svald::dev" />]
          </h1>
          <p className="text-4xl sm:ml-auto px-2 sm:px-30">
            <DecryptedText text="coding solutions"/>
          </p>         
        </div>
      </Card>

      <section className="flex flex-col py-5 items-center gap-1 pb-20">
        <div className="w-[min(100%,70rem)] px-4">
          <h2 className="text-lg text-center font-semibold mb-6">recent posts</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {pocketBlogs.map((blog) => (
              <Link
                key={blog.url}
                href={blog.url}
                className="block rounded-xl overflow-hidden shadow transition hover:shadow-md dark:shadow-white/10"
              >
                {/* leaving this here incase i decide to add images <img src={blog.image} alt=""className="w-full h-40 object-cover"/> */}
                <div className="p-4 bg-white dark:bg-neutral-900">
                  <h3 className="font-medium font-text-base mb-1 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-neutral-500">{blog.domain}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <footer className="text-xs text-neutral-500 text-center">
          {/* to do - consider turning this inot badges, or something similar */}
          <p className="mb-1">
            empowered by:
          </p>
            <ul>
                <li>react</li>
                <li>next.js</li>
                <li>tailwind CSS</li>
                <li>lucide-react</li>
                <li>react-bits</li>
                <li>framer</li>
                <li>github pages</li>
            </ul>
          <p>© {new Date().getFullYear()} michael osvald</p>
        </footer>
      </section>
    </main>
  );
}


const siteLinks: { title: string; url: string; icon: React.ReactNode }[] = [
  {
    title:"about me",
    url: "/aboutme",
    icon: <Smile/>,
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

const pocketBlogs: { title: string; url: string; image: string; domain: string }[] = [
  //leavine image here incase i decide to add images
  {
    title: "placeholder",
    url: "google.ca-",
    image: "",
    domain: "google.ca",
  },
  {
    title: "placeholder",
    url: "google.ca+",
    image: "",
    domain: "google.ca",
  },
  {
    title: "placeholder",
    url: "google.ca*",
    image: "",
    domain: "google.ca",
  },
];
