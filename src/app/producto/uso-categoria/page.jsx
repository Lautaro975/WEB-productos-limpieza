"use client";

import useFetch from "@/app/hooks/useFetch/useFetch";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CardProducto from "@/app/components/cardProducto/cardProducto";
import { useInView } from "react-intersection-observer";

function UsoCategoriaFiltrado() {
  //Buscar los parametros
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria") || "";
  const uso = searchParams.get("uso") || "";

  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(false);
  const { ref, inView } = useInView();

  //Fetch de los productos filtrados
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/productos?categoria=${categoria}&uso=${uso}&page=${page}&limit=12`
  );

  useEffect(() => {
    if (data) {
      setProductos((dataprev) => [...dataprev, ...data?.productos]);
      setHasmore(true);
    }
  }, [data]);
  useEffect(() => {
    if (inView & hasmore && !loading && !error) {
      setPage((prev) => prev + 1);
    }
  }, [hasmore, inView]);
  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="h-24 w-full flex items-center justify-center font-montserrat font-semibold  bg-zinc-300">
        <h6 className=" sm:text-[2em]">
          PRODUCTOS FILTRADOS POR {categoria.toUpperCase() || uso.toUpperCase()}
        </h6>
      </div>
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-10 py-10 w-full bg-zinc-900">
        {productos.map((producto, index) => {
          return (
            <div
              ref={index === productos.length - 1 ? ref : null} //Actua solo con el ultimo elemento
              key={index}
              className="p-2 h-full w-full flex flex-col justify-around 
            items-center text-[#fff] border-4 border-[#4882ff] bg-black-900
            shadow-[8px_8px_20px_black] gap-2
            sm:w-56"
            >
              <CardProducto producto={producto} />
            </div>
          );
        })}
        {loading && <h2>Cargando</h2>}
        {error && <h2>{error.message}</h2>}
      </div>
    </section>
  );
}

export default UsoCategoriaFiltrado;
