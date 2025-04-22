"use client";
import Boton from "../../boton/boton";
import { useRef, useState } from "react";
import _ from "lodash";
import Link from "next/link";

export function Search({ props, propsinput, propsboton, data }) {
  const [productosFiltrados, setProductos] = useState([]);
  const input = useRef();
  const onChange = _.debounce(() => {
    let valorInput = input.current.value.toLowerCase();
    console.log(valorInput);

    if (valorInput === "" || valorInput.length === 0) {
      setProductos([]);
      return;
    }
    let count = 0;
    let productos = [];
    for (let producto of data?.productos || []) {
      if (
        producto.nombre?.toLowerCase().includes(valorInput) ||
        producto.uso_nombre?.toLowerCase().includes(valorInput) ||
        producto.categoria_nombre?.toLowerCase().includes(valorInput)
      ) {
        productos.push(producto);
        count++;
      }
      if (count >= 3) break; // Termina el ciclo cuando ya hayas encontrado 3 productos
    }
    setProductos(productos);
  }, 1000);

  return (
    <>
      <div className={`${props} flex justify-center items-center relative`}>
        <input
          onChange={onChange}
          ref={input}
          placeholder="Buscar productos..."
          className={`${propsinput} bg-inherit border-gray-500 border-b-2 outline-none relative`}
        />
        {productosFiltrados.length > 0 && (
          <div className="absolute mt-4 top-full bg-slate-800 p-4 shadow-lg z-50 w-1/2 space-y-2">
            {productosFiltrados.map((producto, index) => {
              return (
                <div
                  className="flex items-center gap-4 text-white border-white border-[2px] rounded-md p-2"
                  key={index}
                >
                  <img
                    src={producto ? producto?.url : ""}
                    alt="Error al cargar"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{producto?.nombre}</p>
                    <p className="text-sm text-gray-300">
                      {producto?.uso_nombre}
                    </p>
                    <p className="text-sm text-gray-400 italic">
                      {producto?.categoria_nombre}
                    </p>
                  </div>
                </div>
              );
            })}
            <a href={"/producto"}>Ver mas...</a>
          </div>
        )}
        <Boton
          type="button"
          classParams={`${propsboton}flex justify-center items-center overflow-hidden border-gray-500 border-b-2 `}
          handler={onChange}
        >
          <img
            className="cover w-full"
            src="\img\menu\search.png"
            alt="Error"
          />
        </Boton>
      </div>
    </>
  );
}

export default Search;
