"use client";
import { useSearchParams } from "next/navigation";
import Boton from "../../boton/boton";

export function Search({ props, propsinput, propsboton, handler }) {
  const params = useSearchParams();
  return (
    <div className={`${props} flex justify-center items-center`}>
      <input
        placeholder="Buscar productos..."
        className={`${propsinput} bg-inherit border-gray-500 border-b-2 outline-none`}
      ></input>
      <Boton
        type="button"
        classParams={`${propsboton}flex justify-center items-center overflow-hidden border-gray-500 border-b-2 `}
        handler={handler}
      >
        <img className="cover w-full" src="\img\menu\search.png" alt="Error" />
      </Boton>
    </div>
  );
}

export default Search;
