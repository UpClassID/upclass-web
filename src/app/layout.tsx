import Providers from "@/utils/provider";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpClass Indonesia",
  description:
    "Empower your organization's growth with our cutting-edge corporate education platform. Deliver tailored training, upskill your workforce, and achieve business excellence. Partner with us today.",
  authors: [
    { url: "https://github.com/KresnaAP", name: "Kresna Adhi Pramana" },
    { url: "https://github.com/exceldeo", name: "Excel Deo Cornelius" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
