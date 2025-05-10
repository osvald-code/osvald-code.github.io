"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, Smile, NotebookPen, Binary, Cpu} from "lucide-react";
import { Card} from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import DecryptedText from "@/components/ui/DecryptedText";
/**
 * A cosmetically faithful replica of the Firefox New‑Tab page (minus the search bar)
 * implemented as the root page (`app/page.tsx`) in a Next.js (>=13) project.
 *
 * – Tailwind CSS is assumed to be configured with `darkMode: "class"`.
 * – lucide‑react is used for the sun / moon icons.
 * – Replace the `topSites` and `pocketArticles` sample data with your own.
 */
export default function Home() {
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
      {/* Header ‑‑ theme toggle */}
      
      <header className="flex px-2 sm:px-6 py-4 md:px-10 center">

        <h1 className="hidden p-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100 sm:block">
          osvald::dev(home)
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
      
      <Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      
      <Card className="mx-2 sm:mx-20 my-4 flex flex-col items-center lg:shadow-xl shadow-black/50 justify-center h-[100%] lg:h-[calc(90vh-4rem)] dark:bg-slate-800/10">
        {/* <Image src={headerImg} alt="Header Image" width={400} height={200} className="px-10 py-2 rounded-xl" /> */}
        
        <div className="flex flex-col py-6 items-center justify-center">
          <p className="collapse sm:visible text-3xl mr-auto px-30">
             <DecryptedText text="welcome to:"/>
          </p>
          <h1 className="text-5xl sm:text-8xl lg:text-9xl text-center flex p-2"> [<Cpu className = "py-1 w-15 h-15 sm:w-25 sm:h-25 lg:w-35 lg:h-35"/>
            <DecryptedText text="svald::dev" />
          ]</h1>
          <p className="text-4xl sm:ml-auto px-2 sm:px-30">
            <DecryptedText text="coding solutions"/>
          </p>
         
        </div>
        
       
        {/* <Card className="justify-center px-6 rounded-lg shadow-lg shadow-black transition-transform bg-blue-900"> */}
          {/* <CardHeader className="px-6 py-4 font-bold text-xl text-center opacity-90"> */}
          {/* coding solutions */}
          {/* </CardHeader> */}
        {/* </Card> */}
        
      

      </Card>
      <section className="flex flex-col py-5 items-center gap-1 pb-20">
        <div className="w-[min(100%,70rem)] px-4">
          <h2 className="text-lg text-center font-semibold mb-6">recent posts</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {pocketArticles.map((article) => (
              <Link
                key={article.url}
                href={article.url}
                className="block rounded-xl overflow-hidden shadow transition hover:shadow-md dark:shadow-white/10"
              >
                {/* <img
                  src={article.image}
                  alt=""
                  className="w-full h-40 object-cover"
                /> */}
                <div className="p-4 bg-white dark:bg-neutral-900">
                  <h3 className="font-medium font-text-base mb-1 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-neutral-500">{article.domain}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-xs text-neutral-500 text-center">
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
                
            </ul>
          
          <p>© {new Date().getFullYear()} michael osvald</p>
        </footer>
      </section>
    </main>
  );
}

// ---------------------------------------------------------------------------
// SAMPLE DATA (replace with dynamic content or your own list)
// ---------------------------------------------------------------------------
const topSites: { title: string; url: string; icon: React.ReactNode }[] = [
  {
    title:"about me",
    url: "aboutme-coming-soon",
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

const pocketArticles: { title: string; url: string; image: string; domain: string }[] = [

  {
    title: "placeholder",
    url: "google.ca",
    image: "",
    domain: "google.ca",
  },
];
