"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import Post from "../mdx-page/pagemount";
import CustNavBar from "@/components/customnav"
import { Home, NotebookPen, Binary, Cpu, Smile} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area"
import DecryptedText from "@/components/ui/DecryptedText";
import CustomFooter from "@/components/customfooter";
import { Button } from "@/components/ui/button";
import { posts } from "../mdx-page/posts";

export default function BlogClient({ siteLinks }: { siteLinks: { title: string; url: string; icon: React.ReactNode }[] }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [postIndex, setPostName] = useState(0);

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

  const searchParams = useSearchParams();
  const postName = searchParams.get('postName');

  useEffect(() => {
    if (postName) {
      const idx = posts.findIndex((post) => post.name === postName);
      if (idx !== -1) setPostName(idx);
    }
  }, [postName]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen text-neutral-900 antialiased dark:bg-linear-to-r from-purple-800/20 to-slate-950 dark:text-neutral-100 transition-colors duration-300 font-sans">
      <header className="flex px-2 sm:px-6 py-4 md:px-10 center">
        <CustNavBar className="flex items-center w-[100%]" pageName="blog" siteLinks={siteLinks} isDark={dark} toggleTheme={toggleTheme}/>
      </header>
      <Separator orientation="horizontal" className="min-h-[1px] mx-[2%] border-[1px] max-w-[95%]"/>
      <Card className="mx-2 sm:mx-20 my-4 items-center lg:shadow-xl shadow-black/50 justify-center h-[100%] lg:h-[calc(100vh-4rem)] dark:bg-slate-800/10">
        <h1 className="text-4xl font-bold">blog</h1>
        <p className="text-lg mt-4">{posts[postIndex].name}</p>
        <ScrollArea className="prose h-[80%] w-[100%]  prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
          <Post postName={posts[postIndex].name}/>
        </ScrollArea>
        <Button
          onClick={() => {
            const nextIndex = (postIndex + 1) % posts.length;
            setPostName(nextIndex);
          }}
        >
          Next Post
        </Button>
      </Card>
      <CustomFooter/>
    </main>
  );
}