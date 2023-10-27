import { Github, IconGoDemo } from "@/utils";
import Image from "next/image";

const projects = [
  {
    name: "Solitario",
    description: "El juego del solitario",
    src: "/projects/solitario.png",
    technologies: "HTML, CSS, React, Vite",
    linkGithub: "https://github.com/RubenMeju/Solitario_React/",
    linkDemo: "https://solitario-react.vercel.app/",
  },
  {
    name: "Tetris",
    description: "El juego del Tetris",
    src: "/projects/tetris.png",
    technologies: "HTML, CSS, React, Redux Toolkit, Vite",
    linkGithub: "https://github.com/RubenMeju/TetrisReduxToolkit",
    linkDemo: "https://tetris-redux-toolkit.vercel.app/",
  },
  {
    name: "Snake",
    description: "El juego de la serpiente",
    src: "/projects/snake.png",
    technologies: "HTML, CSS, React, Redux Toolkit, Vite",
    linkGithub: "https://github.com/RubenMeju/snake-react",
    linkDemo: "https://snake-react-chi.vercel.app/",
  },
  {
    name: "API Dragon Ball",
    description: "API sobre el famoso anime de Dragon Ball",
    src: "/projects/dragonball.png",
    technologies:
      "Django, Swagger UI, HTML, Tailwind CSS, React, Next 13, FramerMotion",
    linkGithub: "https://github.com/RubenMeju/Dragon_ball_Frontend",
    linkDemo: "https://dragon-ball-frontend.vercel.app/",
  },
  {
    name: "ToDoList",
    description:
      "App simple de lista de tareas estilo Post-it que te permite agregar y eliminar tareas.",
    src: "/projects/todolist.webp",
    technologies: "HTML, CSS, React, Vite",
    linkGithub: "https://github.com/RubenMeju/ToDoList",
    linkDemo: "https://to-do-list-seven-eosin.vercel.app/",
  },
  {
    name: "Movies API TMDB",
    description: "App de películas consumiendo la API TMDB. ",
    src: "/projects/moviesApp1.webp",
    technologies: "HTML, Tailwind CSS, React, Vite",
    linkGithub: "https://github.com/RubenMeju/Movies_API_TMDB",
    linkDemo: "https://movies-api-tmdb.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      <h1 className="text-center text-3xl pb-10">Proyectos</h1>
      <div className="w-full flex flex-col gap-10 md:flex-row md:flex-wrap md: justify-between">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex flex-col gap-2 p-4 bg-zinc-900 rounded-xl md:w-[45%]"
          >
            <h1 className="text-2xl text-sky-400">{project.name}</h1>
            <div className="relative w-full h-64">
              <Image
                src={project.src}
                alt={project.name}
                fill={true}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>

            <section className="w-full flex justify-between">
              <div className="w-[70%] flex flex-col gap-4">
                <p className="pt-2 text-lg">{project.description}</p>
                <p className="text-sm text-slate-200">{project.technologies}</p>
              </div>

              <div className="w-[30%] flex justify-end items-center gap-2">
                <a
                  href={project.linkGithub}
                  target="_blank"
                  className="w-8 h-8"
                >
                  <Github className="fill-white hover:fill-fuchsia-600" />
                </a>

                <a
                  href={project.linkDemo}
                  target="_blank"
                  className="w-10 h-10"
                >
                  <IconGoDemo className="fill-white hover:fill-fuchsia-600 pt-1" />
                </a>
              </div>
            </section>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/RubenMeju?tab=repositories"
        target="_blank"
        className="w-48 m-auto my-10 flex items-center gap-2 border border-fuchsia-600 p-2 rounded-xl  hover:bg-fuchsia-600 transition-all duration-500"
      >
        <Github className="w-10 h-10 fill-white " />
        Más proyectos
      </a>
    </div>
  );
}
