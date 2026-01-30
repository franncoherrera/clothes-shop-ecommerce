import { titleFont } from "@/config/fonts";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8 justify-around">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">NOSOTROS</p>
              <ul className="mt-6 space-y-4 text-sm">
                {firstColumn.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Información</p>

              <ul className="mt-6 space-y-4 text-sm">
                {secondColum.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Información</p>

              <ul className="mt-6 space-y-4 text-sm">
                {thridColumn.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1 ">
              <p className="font-medium text-gray-900">Seguinos</p>
              <ul className="mt-6 space-y-4 text-sm flex gap-4">
                {icons.map((icon, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">Facebook</span>
                      {icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              <span className={`${titleFont.className} antialiased font-bold`}>
                Clothes
              </span>
              <span> | shop</span>
              <span> &copy; {new Date().getFullYear()}</span>{" "}
            </p>

            {/* <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              {footerColum.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const firstColumn: string[] = [
  "Acerca de Nosotros",
  "Sucursales",
  "Contacto",
  "Trabaja con Nosotros",
  "Términos y Condiciones",
];

const secondColum: string[] = [
  "Medios de pago",
  "Preguntas frecuentes",
  "Politicas de envio",
  "Politicas de privacidad",
  "Politicas de cambio y devolución",
  "Como comprar",
  "Sorteo Bicicleta",
  "Sorteo Entradas LPF",
  "Defensa del Consumidor",
  "Guía de Talles",
  "Blog Informativo",
];

const thridColumn: string[] = [
  "WP: Lu a Vi 8 a 17 | Sa 9 a 13",
  "Tel: 0800-777-6789 Lu a Vi 8 a 17 | Sa 9 a 13",
  "Compra segura",
  "Sugerencias y reclamos",
];

const icons: React.ReactNode[] = [
  <IoLogoFacebook size={30} />,
  <IoLogoInstagram size={30} />,
  <IoLogoTwitter size={30} />,
  <IoLogoYoutube size={30} />,
];

// const footerColum: string[] = [
//   "Terms & Conditions",
//   " Privacy Policy",
//   "Cookies",
// ];
