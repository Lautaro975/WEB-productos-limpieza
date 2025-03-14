import { Search } from "@/app/components/menu/search/search";
import Link from "next/link";
import { lazy } from "react";
export function Submenu() {
  return (
    <div
      className="fixed inset-0 h-screen hidden peer-checked:flex flex-col 
  bg-white justify-evenly items-center overflow-hidden z-50"
    >
      <button className="absolute left-4 top-2 w-10">
        <img
          loading="lazy"
          className="w-full"
          src="img/menu/nueva-cuenta.png"
          alt="Nueva cuenta"
        />
      </button>
      <label
        htmlFor="hamburger"
        className="absolute font-black right-2 top-2 cursor-pointer"
      >
        <div className="absolute right-4 top-2 w-6">
          <img
            loading="lazy"
            className="w-full"
            src="img/menu/delete.png"
            alt="Cerrar"
          />
        </div>
      </label>
      <div className="flex gap-10 font-bold mt-8">
        <Link href="">Acerca de</Link>
        <Link href="">Contacto</Link>
        <Link href="">Asistencia</Link>
      </div>

      <p className="text-sm">Llama: +54 223 6697212</p>

      <Search className="flex w-full sm:hidden " />

      <ul className="w-full flex flex-col justify-between items-center h-[40%] z-20 ">
        <li className="flex justify-center p-2 w-full shadow-sm bg-gray-300 hover:bg-gray-400 z-20 ">
          Línea de productos
        </li>
        <li className="flex justify-center p-2 w-full shadow-sm bg-gray-300 hover:bg-gray-400 z-20">
          Productos
        </li>
        <li className="flex justify-center p-2 w-full shadow-sm bg-gray-300 hover:bg-gray-400 z-20">
          Empresa
        </li>
        <li className="flex justify-center p-2 w-full shadow-sm bg-gray-300 hover:bg-gray-400 z-20">
          Contacto
        </li>
      </ul>
    </div>
  );
}
