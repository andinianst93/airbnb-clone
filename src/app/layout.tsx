import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LocaleLodge - Vacation Rentals: Beach Houses, Cabins, Condos & More",
  description: "Find vacation rentals you can count on all over the world. Book the perfect place to stay for your trip, and get great value along with the space, privacy and amenities of home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={montserrat.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
