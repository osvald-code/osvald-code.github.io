"use client";

import { Suspense } from "react";
import BlogClient from "./BlogClient";
import { Home, Smile, Binary } from "lucide-react";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogClient/>
    </Suspense>
  );
}