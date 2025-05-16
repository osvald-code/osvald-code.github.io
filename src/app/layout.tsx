import type { Metadata } from "next";
import { IBM_Plex_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Head from "next/head";




const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibmplexmono-one",
  subsets: ["latin"],
  weight: "400"
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "osvald::dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.className}`}>
      <Head>
      <link
        rel="icon"
        href="/icon"
        type="image/png"
        sizes="64x64"
      />
      </Head>
    <body>{children}</body>
    </html>
  );
}
