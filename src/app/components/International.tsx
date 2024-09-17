"use client";

const countries = [
  { icon: "icon-[emojione--flag-for-argentina]", name: "Argentina" },
  { icon: "icon-[emojione--flag-for-ecuador]", name: "Ecuador" },
  { icon: "icon-[emojione--flag-for-peru]", name: "Perú" },
  { icon: "icon-[emojione--flag-for-colombia]", name: "Colombia" },
  { icon: "icon-[emojione--flag-for-chile]", name: "Chile" },
  { icon: "icon-[emojione--flag-for-mexico]", name: "México" },
  { icon: "icon-[emojione--flag-for-costa-rica]", name: "Costa Rica" },
];

export default function International() {
  return (
    <div className="py-20 flex flex-col items-center gap-y-14 ">
      <h2 className="text-4xl font-semibold">Estamos presentes en </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:px-20 ">
        {countries.map((info, index) => {
          return (
            <div
              key={index}
              className="w-[300px] h-44 bg-white flex flex-col items-center gap-y-2 rounded-md hover:bg-blue-500 transition-all group "
            >
              <div className="w-24 h-24 rounded-full flex justify-center items-center bg-gray-100 p-2">
                <span className={`text-9xl ${info.icon}`} />
              </div>
              <h4 className="font-semibold group-hover:text-white text-2xl">
                {info.name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
