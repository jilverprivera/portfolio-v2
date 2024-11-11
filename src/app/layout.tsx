import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header, Footer } from "@/components/layout";
import "./globals.css";
import "highlight.js/styles/monokai-sublime.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jilver Pacheco",
  description: "Software developer + Electronic engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
