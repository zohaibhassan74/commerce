import { Roboto } from "next/font/google";
import Header from "./components/layout/Header";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight:['400','500','700'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
        <Header />
        {children}
        <footer className=" border-t p-8 text-center text-gray-500 mt-16">
          &copy; 2021 Pizza Joint
      </footer>
        </main>
        </body>
    </html>
  );
}
