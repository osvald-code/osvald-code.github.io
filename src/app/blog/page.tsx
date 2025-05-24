"use client";

import { Suspense } from "react";
import BlogClient from "./BlogClient";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogClient/>
    </Suspense>
  );
}