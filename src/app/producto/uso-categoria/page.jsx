"use client";

import useFetch from "@/app/hook/useFetch/useFetch";
import { useSearchParams } from "next/navigation";

function UsoCategoriaFiltrado() {
  //Buscar los parametros
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria") || "";
  const uso = searchParams.get("uso") || "";
  //

  //Fetch de los productos filtrados
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/productos?categoria=${categoria}&uso=${uso}`,
    "GET"
  );
  //
  console.log(data);
  console.log(error);

  return <div>S</div>;
}

export default UsoCategoriaFiltrado;
