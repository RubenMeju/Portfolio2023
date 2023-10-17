import Image from "next/image";

export default function Header() {
  return (
    <div
      id="header"
      className="w-full mt-10 flex flex-col gap-4 md:my-20 md:flex-row-reverse md:justify-between"
    >
      <div className="relative h-44 md:w-96 md:h-64 ">
        <Image
          src="/vale.png"
          alt="Rubén Yáñez"
          fill
          className="w-full h-full object-contain"
        />
      </div>

      <section className="max-w-md flex flex-col gap-2 text-xl text-aling">
        <div>
          <h1 className="">
            Hola, mi nombre es
            <span className="text-sky-500 text-3xl"> Rubén Yáñez.</span>
          </h1>
          <h2 className="">
            Soy <span className="text-sky-500"> desarrollador web </span>{" "}
            <span className="text-fuchsia-500">Full Stack</span> con sede en La
            Coruña, España.
          </h2>
        </div>

        <p className=" text-slate-300 text-lg">
          Soy un desarrollador autodidacta apasionado por aprender cosas nuevas
          y <span className="text-fuchsia-500">resolver problemas.</span>{" "}
          Actualmente trabajo como freelance, pero estoy buscando nuevas
          oportunidades para crecer como desarrollador.
        </p>

        <div className="flex gap-4">
          <Image
            src="/github.svg"
            alt="github"
            width={50}
            height={50}
            className="cursor-pointer"
          />
          <Image
            src="/linkedin.svg"
            alt="github"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
}
