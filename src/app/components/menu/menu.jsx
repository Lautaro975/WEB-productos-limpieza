import Logo from "./logo/logo";
import Market from "./market/market";
import { Search } from "./search/search";
import { Submenu } from "./submenu/submenu";
import { Suspense } from "react";
import Cargando from "../cargando/cargando";

export function Menu() {
  return (
    <nav className="sticky top-0 bg-[#1E1E1E] w-full p-2 flex flex-col gap-4 h-18 sm:gap-1 sm:h-16 z-40 shadow-black shadow-sm ">
      <div className="grid grid-cols-4 sm:grid-cols-8">
        <Logo></Logo>
        <Search
          props="hidden sm:flex sm:col-start-3 sm:col-end-8"
          propsinput="w-1/2 pl-4 h-10 sm:h-7 "
          propsboton=" w-12 h-10 sm:h-7 "
        ></Search>
        <Market></Market>
        <div className="relative flex justify-center items-center mr-3 sm:w-12 sm:col-start-9">
          <input type="checkbox" id="hamburger" className="peer hidden" />
          <label
            htmlFor="hamburger"
            className="absolute right-0 text-3xl peer-checked:hidden cursor-pointer text-[white]"
          >
            ☰
          </label>
          <Suspense fallback={<Cargando></Cargando>}>
            <Submenu></Submenu>
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
