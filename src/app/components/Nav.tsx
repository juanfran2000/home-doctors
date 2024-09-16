"use client";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [toggle, setToggle] = useState(true); // Cambiado 'let' a 'const'

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className="flex justify-between px-8 md:justify-around items-center py-4">
        <Image
          src="/home_doctors.png"
          alt="logo"
          width={110}
          height={110}
          className="w-20 md:w-28"
        />
        <ul className="hidden md:flex gap-x-8 xl:gap-x-12 items-center">
          <li>
            <a href="#home">
              Home <b className="text-blue-500">ASSITS</b>
            </a>
          </li>
          <li>
            <a href="#our">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#countries">Cobertura</a>
          </li>
          <li>
            <a href="#contact">Contáctenos</a>
          </li>
        </ul>
        <div
          onClick={toggleMenu} // Simplificado
          className="md:hidden cursor-pointer" // Agregado cursor pointer para indicar clicabilidad
        >
          <span
            className={`${
              toggle
                ? "icon-[marketeq--menu]"
                : "icon-[ph--x-thin] text-blue-600"
            } text-4xl`}
          />
        </div>
      </nav>
      <div
        className={`${
          toggle ? "max-h-0" : "max-h-[500px]"
        } overflow-hidden md:hidden transition-all duration-500 ease-in-out`}
      >
        <ul className="bg-sky-950 text-white py-6 px-8 flex flex-col gap-y-4">
          <li>
            <a href="#home">
              Home <b className="text-blue-500">ASSITS</b>
            </a>
          </li>
          <li>
            <a href="#our">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#countries">Cobertura</a>
          </li>
          <li>
            <a href="#contact">Contáctenos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
