import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge"

export default function CustomFooter() {
    return (
        <footer className="text-xs text-neutral-500 text-center">
          <p className="mb-1">
            site empowered by:
          </p>
        <ul className="p-2 flex flex-wrap items-center justify-center list-none gap-2">        
          {siteLinks.map((site) => (
            <li key={site.url}>
                <Link 
                    href={site.url} 
                    target="_blank"
                    className={`${badgeVariants({ variant: "secondary" })} hover:underline`}
                >
                    {site.title}
                </Link>
            </li>
             
            ))}
        </ul>
          <p>© {new Date().getFullYear()} michael osvald</p>
        </footer>
    )};

    const siteLinks: { title: string; url: string;}[] = [
        {
          title:"react",
          url: "https://react.dev/",
        },
        {
          title: "next.js",
          url: "https://nextjs.org/",
        },
        {
          title: "tailwindcss",
          url: "https://tailwindcss.com/",
        },
        {
          title: "lucide-react",
          url: "https://lucide.dev/",
        },
        {
          title: "reactbits",
            url: "https://www.reactbits.dev/",
        },
        {
        title: "radix-ui",
        url: "https://www.radix-ui.com/",
        },
        {
        title: "shadcn/ui",
        url: "https://ui.shadcn.com/",
        },
        {
        title: "typescript",
        url: "https://www.typescriptlang.org/",
        },
        {
          title: "motion",
          url: "https://www.motion.dev/",
        },
        {
          title: "github pages",
          url: "https://pages.github.com/",
        },        
      ];