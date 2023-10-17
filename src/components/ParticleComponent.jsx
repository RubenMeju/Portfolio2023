"use client";
import React, { useEffect, useRef } from "react";

const ParticleComponent = () => {
  const tela = useRef(null);
  const canvas = useRef(null);
  const textYPosition = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const createCanvas = () => {
      tela.current = document.createElement("canvas");
      tela.current.width = window.innerWidth;
      tela.current.height = window.innerHeight;
      canvas.current = tela.current.getContext("2d");
      document.body.appendChild(tela.current);
    };

    const writeText = () => {
      const text = "Rubén\nYáñez\nDEV";
      const size = 100;
      canvas.current.font = size + "px Montserrat";
      canvas.current.fillStyle = "#111111";
      canvas.current.textAlign = "center";
      const lineheight = 70;
      const lines = text.split("\n");
      for (let i = 0; i < lines.length; i++) {
        canvas.current.fillText(
          lines[i],
          tela.current.width / 2,
          textYPosition.current + lineheight * i
        );
      }
    };

    const clear = () => {
      canvas.current.globalAlpha = 0.03;
      canvas.current.fillStyle = "#111111";
      canvas.current.fillRect(0, 0, tela.current.width, tela.current.height);
      canvas.current.globalAlpha = 1;
    };

    const animateText = () => {
      clear();
      writeText();
      textYPosition.current += 1; // Cambia la velocidad de la animación ajustando este valor
      if (textYPosition.current > tela.current.height) {
        textYPosition.current = -100; // Reinicia la posición del texto cuando se sale de la pantalla
      }
      animationFrameId = requestAnimationFrame(animateText);
    };

    createCanvas();
    animateText();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-black h-screen w-screen overflow-hidden relative">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-montserrat text-center w-full">
        <h3 className="absolute bottom-0 w-full text-2xl font-light text-white leading-1 tracking-wide">
          A N O T H E R <span className="font-normal">C O D E P E N</span>
        </h3>
      </div>

      <div className="fixed left-4 bottom-4 z-10 font-montserrat text-xs">
        <a
          href="https://codepen.io/plasm/"
          target="_blank"
          className="white-mode-link"
        >
          VIEW OTHER PENS
        </a>
        <a
          href="https://codepen.io/collection/nZpPbz/"
          target="_blank"
          className="white-mode-link"
        >
          VIEW OTHER PARTICLES
        </a>
      </div>
    </div>
  );
};

export default ParticleComponent;
