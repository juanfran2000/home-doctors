"use client";
import Image from "next/image";

export default function Out() {
  return (
    <div className="bg-blue-100 w-full flex py-40">
      <div className="w-[50%] flex justify-center items-center ">
        <Image
          src="/drugs.png"
          alt="imagen pastillas"
          height={1563}
          width={1563}
          className="w-8/12"
        />
      </div>
      <div className="lg:w-[50%] font-semibold text-zinc-500 flex flex-col justify-center gap-y-8 pl-8 ">
        <h3 className="text-4xl text-black w-11/12 md:w-9/12">
          Una dosis de nosotros
        </h3>
        <p className="w-11/12">
          Assist se dedica a la prestación de servicios médicos a empresas
          dentro del rubro de asistencia al viajero en las principales ciudades
          de LATAM. Está conformada por un grupo de profesionales con amplia
          experiencia en el mercado de gestión de salud.
        </p>
        <p className="w-11/12">
          Actuando como nexo con nuestra amplia y confiable red de prestadores
          médicos, logramos maximizar la eficiencia en los tiempos de
          coordinación de consultas médicas, aportando de esta manera un valor
          agregado al servicio que brindan aseguradoras médicas y compañías de
          asistencia al viajero.
        </p>
        <p className="w-11/12">
          Nuestra gran trayectoria en el mercado nos permite adaptarnos a todo
          tipo de situaciones y responder eficientemente a las necesidades de
          nuestros clientes.
        </p>
      </div>
    </div>
  );
}
