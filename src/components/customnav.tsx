import { Link, NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Separator } from "@/components/ui/separator";
import * as React from "react"
import { Moon, Sun } from "lucide-react";


export default function CustNavBar({ className, pageName, siteLinks, isDark, toggleTheme, ...props }: { 
    className?: string; 
    pageName: string;
    siteLinks: { title: string; url: string; icon: React.ReactNode }[]; 
    isDark: boolean; 
    toggleTheme: () => void; 
}) {
    const sites = siteLinks;

    return (
        <div className={`${className}`} {...props}>
                <h1 className="hidden p-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100 sm:block">
                osvald::dev(<a href={pageName==="home"?"/.":"/"+pageName}>{pageName}</a>)
                </h1>
                <NavigationMenu className="mr-auto sm:ml-auto sm:mr-0">
                        <NavigationMenuList className="flex flex-row gap-4">
                                {sites.map((site) => (
                                        <NavigationMenuItem key={site.url} className="font-bold text-md sm:p-2 sm:text-xl lg:text-2xl"  >
                                                <Link href={site.url} className="hover:underline flex items-center whitespace-nowrap">
                                                        <div className="pr-2">{site.icon} </div> {site.title}  
                                                </Link>
                                        </NavigationMenuItem>
                                ))}
                        </NavigationMenuList>
                </NavigationMenu>
                <Separator orientation="vertical" className="min-h-[35px] m-[5px] border-[1px] invisible sm:visible" />
    
                <button
                        aria-label="Toggle Dark Mode"
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                {isDark ? <Sun size={25} /> : <Moon size={25} />} 
                </button>
        </div>
    )
}

