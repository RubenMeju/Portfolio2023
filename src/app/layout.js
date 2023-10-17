import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rubén Yáñez - Porfolio",
  description: "Portfolio de proyectos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="w-[90%] m-auto mb-20 lg:max-w-4xl">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
