import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // choose the weights you need
  variable: "--font-open-sans", // optional: CSS variable
  display: "swap", // better performance
});

export const metadata: Metadata = {
  title: "Amirtha's Portfolio",
  description: "Amirtha's Portfolio",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
