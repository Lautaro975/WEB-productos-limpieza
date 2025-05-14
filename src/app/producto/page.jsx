"use client";
import { motion, AnimatePresence } from "framer-motion";
import useFetch from "../hooks/useFetch/useFetch";
import Search from "../components/menu/search/search";
import Filtrar from "../components/filtrado/filtrado";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CardProducto from "../components/cardProducto/cardProducto";

const limit = 12;

function Productos() {
  //Animacion del menu
  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => setMenuAbierto((prev) => !prev);

  //Constantes
  const { ref, inView } = useInView();
  const [productos, setProductos] = useState([]);
  const [hasMore, setHasmore] = useState(false);
  const [page, setPage] = useState(1);

  //Fetching de los datos
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/productos?page=${page}&limit=${limit}`
  );
  const {
    data: Metadata,
    loading: LoadingMeta,
    error: ErrorMeta,
  } = useFetch(`http://localhost:3000/api/metadata`);

  //Observar el cambio de data
  useEffect(() => {
    if (data) {
      setProductos((prev) => [...prev, ...data?.productos]);
      setHasmore(data?.hasMore);
    }
  }, [data]);

  //Pasar la pagina
  useEffect(() => {
    if (hasMore && inView && !loading && !error) {
      setPage((p) => p + 1);
    }
  }, [inView, hasMore, loading, error]);
  return (
    <section className="bg-zinc-900  h-full w-full flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col justify-center items-center pt-4 gap-4 text-white">
        <h5 className="text-md font-montserrat sm:text-[3em]">PRODUCTOS</h5>
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center"
        >
          <div className="w-6 sm:w-10">
            <img
              className="h-full w-full"
              src="/img/menu/filtrarBlanco.png"
              alt="Filtrar"
            />
          </div>
          <h3 className="text-[.7em] mt-1 font-montserrat sm:text-[1.5em]">
            FILTRAR
          </h3>
        </button>

        <input
          className="hidden peer"
          type="checkbox"
          name="filtro"
          id="filtrar"
        />

        <AnimatePresence>
          {menuAbierto && (
            <motion.nav
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-screen w-1/2  xl:w-2/12 bg-zinc-900 shadow-xl text-white flex flex-col z-50"
            >
              <button
                onClick={toggleMenu}
                className="absolute right-4 top-2 w-6"
              >
                <img src="img/menu/cerrar.png" alt="Cerrar" />
              </button>

              <Search
                props="sm:hidden flex pt-7"
                propsinput="w-1/2 pl-4 h-[3.2rem] text-[.7em]"
                propsboton="w-12 h-7"
              />
              {LoadingMeta && <H2> CARGANDO ...</H2>}
              {ErrorMeta && <h2>{ErrorMeta.message}</h2>}
              {Metadata && (
                <>
                  <Filtrar
                    tipodata={Metadata?.Categoria}
                    label="Categorias"
                    uso={""}
                    page={1}
                    limit={12}
                  />
                  <Filtrar
                    tipodata={Metadata?.TipoUso}
                    uso={"TipoUso"}
                    label="Tipos de usos"
                    page={1}
                    limit={12}
                  />
                </>
              )}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
      {/* Productos */}
      <section
        className="pt-4 grid grid-cols-2 gap-4 place-items-center
       bg-zinc-900 w-full sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] xl:gap-10 xl:p-4 xl:pt-16"
      >
        {productos.map((producto, index) => {
          return (
            <div
              ref={index === productos.length - 1 ? ref : null}
              key={index}
              className="p-2 h-full w-full flex flex-col justify-around 
            items-center text-[#fff] border-4 border-[#4882ff] 
            shadow-[8px_8px_20px_black] gap-2
            sm:w-56"
            >
              <CardProducto producto={producto} />
            </div>
          );
        })}
        {loading && <h2>Cargando</h2>}
        {error && <h2>{error.message}</h2>}
      </section>
    </section>
  );
}

export default Productos;
