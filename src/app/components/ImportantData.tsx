const cards = [
  {
    icon: "icon-[fa--check]",
    title: "Operación",
    description:
      "Atendemos los 365 días del año. Gestionamos de manera rápida y eficiente cada solicitud.",
  },
  {
    icon: "icon-[bi--person-lines-fill]",
    title: "Personalizado",
    description:
      "Brindamos atención personalizada a cada uno de nuestros clientes.",
  },
  {
    icon: "icon-[fa6-solid--handshake-simple]",
    title: "Convenios",
    description: "Nuestros convenios son directos, sin intermediarios.",
  },
  {
    icon: "icon-[fa--user-md]",
    title: "Red profunda",
    description:
      "Actualmente cubrimos 30 países y más de 450 ciudades en América y Europa.",
  },
];

export default function ImportantData() {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full bg-gray-100 py-20">
      <div className="flex flex-col lg:w-[50%] md:flex-row md:flex-wrap gap-6 justify-center items-center py-6">
        {cards.map((info, index) => (
          <div
            key={index}
            className="w-11/12 lg:w-[40%] h-80 shadow-md rounded-md bg-white flex flex-col px-12 gap-y-4 justify-center hover:bg-blue-500 group transition-all reveal"
          >
            <div className="w-16 h-16 flex justify-center items-center bg-blue-100 group-hover:bg-blue-400 rounded-full">
              <span
                className={`${info.icon} text-blue-500 text-3xl group-hover:text-white`}
              />
            </div>
            <h3 className="font-bold text-xl group-hover:text-white">
              {info.title}
            </h3>
            <p className="text-zinc-500 group-hover:text-white font-semibold md:text-[15px]">
              {info.description}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:w-[50%] font-semibold text-zinc-500 flex flex-col justify-center gap-y-8 pl-8 reveal">
        <h4>ALGUNOS DATOS IMPORTANTES</h4>
        <h3 className="text-4xl text-black w-11/12 md:w-9/12">
          Hemos gestionado atenciones para más de 10.000 personas
        </h3>
        <p className="w-11/12">
          Con una amplia experiencia en el área y creciendo diario, Assits ha
          gestionado atenciones para más de 10.000 personas, ha coordinado más
          de 12,000 servicios médicos, y tiene un porcentaje de solicitudes
          recibidas y respondidas positivamente ofreciendo cobertura, del 95%.
        </p>
        <p className="w-11/12">
          Uno de nuestros pilares como empresa es el constante fortalecimiento
          de nuestra red de prestadores. Estamos continuamente en la búsqueda de
          nuevas oportunidades, alianzas y desarrollo de nuevos convenios que
          nos permitan brindar servicios a precios competitivos, sin el uso de
          intermediarios y con una cobertura amplia y profunda. Podemos afirmar
          que destacamos por la capacidad de adaptación y acción para atender
          las necesidades específicas de nuestros clientes.
        </p>
      </div>
    </div>
  );
}
