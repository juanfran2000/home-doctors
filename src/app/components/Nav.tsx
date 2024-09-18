"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("nav");
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const navLinks = [
    { link: "#our", title: `${t("about")}` },
    { link: "#services", title: `${t("services")}` },
    { link: "#countries", title: `${t("coverage")}` },
    { link: "#contact", title: `${t("contact")}` },
  ];

  return (
    <div>
      <nav className="flex justify-between px-8 md:justify-around items-center py-4">
        <Image
          src="/home_doctors.PNG"
          alt="logo"
          width={110}
          height={110}
          className="w-20 md:w-28"
        />
        <ul className="hidden md:flex gap-x-8 xl:gap-x-12 items-center">
          <li>
            <a href="#home">
              {t("home")}
              <b className="text-blue-500">{t("blue")}</b>
            </a>
          </li>
          {navLinks.map((info, index) => {
            return (
              <li key={index}>
                <a href={info.link}>{info.title}</a>
              </li>
            );
          })}
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
              {t("home")} <b className="text-blue-500">{t("blue")}</b>
            </a>
          </li>
          {navLinks.map((info, index) => {
            return (
              <li key={index}>
                <a href={info.link}>{info.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
