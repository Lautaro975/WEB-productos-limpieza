"use client";
import { motion, AnimatePresence } from "framer-motion";
import useFetch from "../hook/useFetch/useFetch";
import Search from "../components/menu/search/search";
import Filtrar from "../components/filtrado/filtrado";
import { useState } from "react";
function Productos() {
  const { data, loading, error } = useFetch(
    "http://localhost:3000/api/metadata"
  );
  const { producto, loadingP, errorP } = useFetch();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto((prev) => !prev);
  };
  return (
    <section className="bg-slate-200 h-screen flex flex-col  items-center">
      <div className=" w-full  flex flex-col justify-center items-center pt-4 gap-4">
        {/* {"Filtrado"} */}
        <h5 className="text-md">Productos</h5>

        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center"
        >
          <div className="w-6">
            <img
              className="h-full w-full"
              src="/img/menu/filtrar.png"
              alt="Filtrar"
            />
          </div>
          <h3 className="text-[.7em] font-serif">Filtrar</h3>
        </button>

        <input
          className="hidden peer"
          type="checkbox"
          name="filtro"
          id="filtrar"
        />
        {/* {"Filtrado"} */}

        {/* {"Sumbmemu"} */}
        <AnimatePresence>
          {menuAbierto && (
            <motion.nav
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-screen w-1/2 bg-zinc-900 shadow-xl text-white flex flex-col z-50"
            >
              {/* Botón cerrar */}
              <button
                onClick={toggleMenu}
                className="absolute right-4 top-2 w-6 "
              >
                <img src="img/menu/delete.png" alt="Cerrar" />
              </button>

              <Search
                props=" sm:hidden flex pt-7"
                propsinput="w-1/2 pl-4 h-[3.2rem] text-[.7em]"
                propsboton="w-12 h-7"
              />
              <Filtrar data={data} tipodata="Categoria" label="Categorias" />
              <Filtrar data={data} tipodata="TipoUso" label="Tipo de uso" />
            </motion.nav>
          )}
        </AnimatePresence>
        {/* {"Sumbmemu"} */}
      </div>
    </section>
  );
}

export default Productos;
