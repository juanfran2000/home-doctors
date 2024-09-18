import Switcher from "./Switcher";

export default function BoxMail() {
  return (
    <div className="bg-sky-950 flex justify-end pr-4 md:pr-0 md:justify-center items-center  h-11 gap-x-1">
      <span className="icon-[lucide--mail] text-blue-500 hidden md:block" />
      <h3 className="hidden md:block text-gray-400">Info@mchomedoctors.com</h3>
      <div className="flex gap-x-1 justify-center md:absolute md:right-28 text-white">
        {/* <div className="bg-blue-500 w-[50px] flex justify-center h-10 items-center">
          ESP
        </div>
        <div className="bg-blue-500 w-[50px] flex justify-center h-10 items-center">
          ENG
        </div> */}
        <Switcher />
      </div>
    </div>
  );
}
