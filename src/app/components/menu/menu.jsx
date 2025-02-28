import Logo from "./logo/logo";
import Market from "./market/market";
import { Search } from "./search/search";
import { Submenu } from "./submenu/submenu";

export function Menu() {
  return (
    <nav className="bg-[#1E1E1E] w-full p-2 flex flex-col gap-4 md:gap-1 drop-shadow-[0_10px_35px_#000] ">
      <div className="grid grid-cols-4 md:grid-cols-8">
        <Logo></Logo>
        <Market></Market>
        <div className="relative flex justify-center items-center mr-3 md:w-12 md:col-start-9">
          <input type="checkbox" id="hamburger" className="peer hidden" />

          <label
            htmlFor="hamburger"
            className="absolute right-0 text-3xl peer-checked:hidden cursor-pointer text-[white]"
          >
            ☰
          </label>
          <Submenu></Submenu>
        </div>
      </div>
      <Search className="hidden sm:flex"></Search>
    </nav>
  );
}
