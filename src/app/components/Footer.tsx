import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col gap-20 lg:flex-row lg:justify-around pl-10">
        <div className="flex items-center justify-start">
          <Image src="/home_doctors.png" alt="logo" width={110} height={110} />
        </div>
        <ul className="text-white">
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
        <ul className="text-white">
          <li className=" font-semibold text-zinc-300">Contacto</li>
          <li>Phone : +5491134638703</li>
          <li>Email : info@mchomedoctors.com</li>
        </ul>

        <ul className="text-white">
          <li className=" font-semibold text-zinc-300">Ubicación</li>
          <li>Matriz Argentina, Buenos Aires</li>
          <li>Burela 1853</li>
        </ul>
        <ul className="flex gap-x-6 text-2xl text-white">
          <li>
            <a
              href="https://www.facebook.com/Mc-Home-Doctors-104333654991431"
              target="_blank"
            >
              <span className="icon-[bi--facebook] hover:scale-125 transition-all" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mc_homedoctors/" target="_blank">
              <span className="icon-[formkit--instagram]  hover:scale-125 transition-all" />
            </a>
          </li>
          <li>
            <a
              href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fbusiness.google.com%2Fn%2F449012195109942027%2Fsearchprofile%3Facct_rdr%3D1&ddm=0&flowName=GlifWebSignIn&flowEntry=AccountChooser"
              target="_blank"
            >
              <span className="icon-[logos--google]  hover:scale-125 transition-all" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/mc-home-doctors/?viewAsMember=true"
              target="_blank"
            >
              <span className="icon-[uil--linkedin]  hover:scale-125 transition-all" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
