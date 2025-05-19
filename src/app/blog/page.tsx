"use client";

import { Suspense } from "react";
import BlogClient from "./BlogClient";
import { Home, Smile, Binary } from "lucide-react";

const siteLinks = [
  { title: "home", url: "/.", icon: <Home/> },
  { title: "about me", url: "/aboutme", icon: <Smile/> },
  { title: "projects", url: "/projects", icon: <Binary/> },
];

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogClient siteLinks={siteLinks} />
    </Suspense>
  );
}