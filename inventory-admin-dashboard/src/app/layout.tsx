import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inventory Command Center",
  description: "Admin dashboard for real-time inventory and fulfillment insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="relative min-h-screen bg-slate-950 text-slate-100">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),rgba(2,6,23,0.9))]" />
          </div>
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}
