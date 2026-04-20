import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bakı Ağrı Klinikası",
  description: "Ağrısız həyat üçün ixtisaslaşmış həkim köməyi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
