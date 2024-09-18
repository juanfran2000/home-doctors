import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Hero() {
  const t = useTranslations("hero");
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute text-white z-10 w-9/12 md:w-5/12 text-center">
        <h2 className="text-4xl md:text-6xl">{t("h2")}</h2>
        <h4 className="text-md mt-6">{t("h4")}</h4>
      </div>
      <div className="flex justify-center h-[570px] md:h-[700px] w-full bg-sky-950">
        <Image
          src="/hero.jpg"
          alt="hero imagen doctores"
          width={1366}
          height={768}
          className="h-full w-full object-cover opacity-55"
        />
      </div>
    </div>
  );
}
