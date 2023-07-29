import "app/styles/styleGlobal.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ToastContainer autoClose={2000} />
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
