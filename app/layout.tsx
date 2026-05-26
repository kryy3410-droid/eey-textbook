import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EEY Digital English Textbook",
  description: "デジタル英語教材 by EEY（English Education of Yuho）",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
