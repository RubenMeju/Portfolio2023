import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full h-16 px-4 text-xl text-white flex items-center gap-4 border-b border-white/50">
      <Link href="#">Inicio</Link>
      <Link href="#projects">Proyectos</Link>
    </nav>
  );
}
