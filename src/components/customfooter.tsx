import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge"

export default function CustomFooter() {
    return (
        <footer className="text-xs text-neutral-500 text-center">
          <p className="mb-1">
            empowered by:
          </p>
        <ul className="p-2 flex flex-wrap items-center justify-center list-none gap-2">        
          {siteLinks.map((site) => (
            <li key={site.url}>
                <Link href={site.url} className={badgeVariants({ variant: "outline" })}>{site.title}</Link>
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
          title: "framer",
          url: "https://www.framer.com/",
        },
        {
          title: "github pages",
          url: "https://pages.github.com/",
        },        
      ];