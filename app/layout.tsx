import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Auth Solution",
  description: "Modern Auth Solution in NextJs with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
                {/* <div className=" space-y-2 fixed top-4 left-4">
          <div className=" flex gap-x-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={72}
              height={27}
              priority
            />
            <div>+</div>
            <Image
              className="dark:invert"
              src="/better-auth.svg"
              alt="Better Auth logo"
              width={20}
              height={24}
              priority
            />
          </div>
          <h1 className="font-medium ">
            Modern Auth Solution In NextJs
          </h1>
        </div> */}
        {children}
      </body>
    </html>
  );
}
