"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import Post from "../mdx-page/pagemount";
import CustNavBar from "@/components/customnav"
import { Home, NotebookPen, Binary, Cpu, Smile} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import DecryptedText from "@/components/ui/DecryptedText";
import CustomFooter from "@/components/customfooter";
import { Button } from "@/components/ui/button";
import { posts } from "../mdx-page/posts";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Particles from "@/components/Particles";
 

export default function BlogClient() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [postIndex, setPostName] = useState(0);

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
    <main className="min-h-screen text-neutral-900 antialiased dark:text-neutral-100 transition-colors duration-300 font-sans">
      <header className="flex px-2 sm:px-6 py-4 md:px-10 center">
        <CustNavBar className="flex items-center w-[100%]" pageName="blog" isDark={dark} toggleTheme={toggleTheme}/>
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
      <Card className="mx-2 sm:mx-20 my-4 flex items-center lg:shadow-xl shadow-black/50 justify-center dark:bg-zinc-900/65">
        <h1 className="text-2xl sm:text-5xl lg:text-7xl py-4 flex justify-center items-center text-center">welcome to my blog!</h1>
        <Pagination className="mt-4 w-[100%]">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious  
                onClick={() => {
                  const nextIndex = Number((postIndex - 1) > 0) ;
                  setPostName(nextIndex);
                }}/>
            </PaginationItem>
            {posts.map((post, idx) =>
                          ( 
                            <PaginationItem key={post.name}>
                              <PaginationLink 
                                isActive={postIndex===idx} 
                                onClick={() => {
                                  setPostName(idx);
                                }}> 
                                {idx + 1}
                              </PaginationLink>
                              {/* <PaginationLink isActive={postIndex===idx}  href={"blog/?postName=" + post.name}> {idx + 1}</PaginationLink> */}
                            </PaginationItem>
                          )
                        )}
            <PaginationItem> <PaginationEllipsis /></PaginationItem>
            <PaginationItem>
              <PaginationNext  
                onClick={() => {
                const nextIndex = (postIndex + 1) % posts.length;
                setPostName(nextIndex);
              }}/>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        
        <p className="text-6xl mt-4">{posts[postIndex].name}</p>
        <ScrollArea className="prose h-[80%] max-w-[100%] p-4 md:px-20 prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-invert">
          <Post postName={posts[postIndex].name}/>
           <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Card>
      <CustomFooter/>
    </main>
  );
}