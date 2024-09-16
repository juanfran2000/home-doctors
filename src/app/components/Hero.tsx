import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute text-white z-10 w-9/12 md:w-5/12 text-center">
        <h2 className="text-4xl md:text-6xl">
          +10,000 servicios médicos coordinados
        </h2>
        <h4 className="text-md mt-6">Y continuamos creciendo día a día.</h4>
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
