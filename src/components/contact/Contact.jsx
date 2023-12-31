import { Github, LinkedIn } from "@/utils";
import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col gap-6 text-center text-3xl pt-20"
    >
      <h3 className="">Contáctame</h3>
      <h1 className="text-4xl w-full">Rubén Yáñez</h1>

      <span className="text-xl">rubenmeju@outlook.es</span>

      <div className="flex gap-6 justify-center">
        <a
          href="https://github.com/RubenMeju"
          target="_blank"
          className="w-14 h-14"
        >
          <Github className="fill-white hover:fill-fuchsia-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/ruben-yanez/"
          target="_blank"
          className="w-14 h-14"
        >
          <LinkedIn className="fill-white hover:fill-fuchsia-600" />
        </a>
      </div>
    </div>
  );
}
