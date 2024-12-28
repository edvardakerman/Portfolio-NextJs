import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import "./globals.css";
import Menlo from '@next/font/local'
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const menlo = Menlo({
  src: [
    {
      path: '../../public/Menlo-Regular.ttf',
      weight: '400'
    },
  ],
})



export const metadata: Metadata = {
  title: "Edvard Åkerman",
  description: "Showcase of Edvard Åkerman's projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="../favicon.ico" />
      <body className={menlo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
