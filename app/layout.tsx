import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OM PHYSIO CARE & FITNESS CENTER | Healing & Performance",
  description: "Advanced physiotherapy, sports rehabilitation, and posture alignment clinic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}