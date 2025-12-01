import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "DOOMER ($DOOM)",
  description: "The Dev faded. The community remained. A pure CTO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} font-mono antialiased bg-black text-gray-300 selection:bg-green-900 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
