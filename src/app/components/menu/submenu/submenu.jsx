import Search from "../search/search";

export function Submenu() {
  return (
    <div
      className="hidden peer-checked:flex bg-[white] flex-col top-0 fixed inset-0 z-50
          justify-evenly items-center"
    >
      <button className="absolute left-4 top-2 w-10">
        <img className="w-full" src="img\menu\nueva-cuenta.png" alt="" />
      </button>
      <label
        htmlFor="hamburger"
        className="absolute font-black right-2 top-2 cursor-pointer "
      >
        <div className="absolute right-4 top-2 w-6">
          <img className="w-full" src="\img\menu\delete.png" alt="Error" />
        </div>
      </label>
      <div className="flex gap-10 font-bold mt-8">
        <a href="">Acerca de</a>
        <a href="">Contacto</a>
        <a href="">Asistencia</a>
      </div>

      <p className="text-sm ">Llama: +54 223 6697212</p>

      <Search className="flex w-full sm:hidden "></Search>

      <ul className="w-full flex flex-col justify-between items-center h-[40%] ">
        <li className="flex justify-center p-2 w-full shadow-md bg-gray-300  hover:bg-gray-400">
          Línea de productos
        </li>
        <li className="flex justify-center p-2 w-full shadow-md bg-gray-300 hover:bg-gray-400">
          Productos
        </li>
        <li className="flex justify-center p-2 w-full shadow-md bg-gray-300 hover:bg-gray-400">
          Empresa
        </li>
        <li className="flex justify-center p-2 w-full shadow-md bg-gray-300 hover:bg-gray-400">
          Contacto
        </li>
      </ul>
    </div>
  );
}
