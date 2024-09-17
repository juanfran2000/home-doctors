"use client";

const cards = [
  {
    icon: "icon-[bxs--ambulance]",
    title: "Atención sanitaria domiciliaria",
    description:
      "Nuestros servicios incluyen atención médica en el lugar en donde esté el cliente.",
  },
  {
    icon: "icon-[ph--hospital] ",
    title: "Consultas en hospitales/clínica",
    description: "Incluye consultas con medicina general o especialistas.",
  },
  {
    icon: "icon-[material-symbols--medical-services]",
    title: "Consultas odontológicas",
    description: "Se incluyen consultas ante problemas dentales.",
  },
  {
    icon: "icon-[jam--medical]",
    title: "Estudios de diagnóstico",
    description:
      "Incluímos las pruebas necesarias para detectar el problema de nuestro cliente.",
  },
  {
    icon: "icon-[gis--car]",
    title: "Traslados sanitarios",
    description:
      "Brindamos, en nuestro servicio, la opción de traslados sanitarios.",
  },
  {
    icon: "icon-[fa--user-md]",
    title: "Especialistas",
    description:
      "Contando con atención personalizada, acudiremos al especialista que sea necesario.",
  },
  {
    icon: "icon-[bi--person-lines-fill]",
    title: "Personalizado",
    description:
      "Todos nuestros servicios se adaptan a las necesidades de los clientes.",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-gray-100">
      <div className="flex flex-col justify-center items-center w-10/12 md:w-6/12 font-semibold text-zinc-500 gap-y-6">
        <h4 className="text-sm">SERVICIOS</h4>
        <h3 className="text-4xl text-black">Nuestros servicios</h3>
        <p className="text-center">
          A través de convenios realizados con instituciones médicas y
          prestadores locales, podemos ocuparnos de la logística y efectuar el
          pago directo de asistencias médicas, acelerando los procesos del
          servicio y garantizando un alto estándar de calidad.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 px-20">
        {cards.map((info, index) => {
          return (
            <div className="flex flex-col items-center" key={index}>
              <div className="w-36 h-32 bg-white shadow-md flex justify-center items-center">
                <span className={`${info.icon} text-7xl text-blue-500`} />
              </div>
              <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-t-[28px] border-transparent border-t-white"></div>
              <div className="flex justify-center flex-col items-center gap-y-3 mt-2">
                <h3 className="font-semibold text-2xl w-full text-center">
                  {info.title}
                </h3>
                <p className="text-center text-gray-500">{info.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
