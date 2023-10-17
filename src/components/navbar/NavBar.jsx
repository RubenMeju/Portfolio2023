import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full h-16 text-xl text-white flex items-center gap-4 border-b border-fuchsia-500">
      <Link href="#" className="hover:text-sky-500">
        Inicio
      </Link>
      <Link href="#projects" className="hover:text-sky-500">
        Proyectos
      </Link>
      <Link href="#contact" className="hover:text-sky-500">
        Contacto
      </Link>
    </nav>
  );
}
