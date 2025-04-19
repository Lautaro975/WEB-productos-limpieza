"use client";
import { useSearchParams } from "next/navigation";
import Boton from "../../boton/boton";
import { useRef } from "react";
import _ from "lodash";

export function Search({ props, propsinput, propsboton, data }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const input = useRef();
  const onChange = _.debounce(() => {
    console.log(input);
  }, 2000);
  return (
    <div className={`${props} flex justify-center items-center`}>
      <input
        onChange={onChange}
        ref={input}
        placeholder="Buscar productos..."
        className={`${propsinput} bg-inherit border-gray-500 border-b-2 outline-none`}
      />
      <Boton
        type="button"
        classParams={`${propsboton}flex justify-center items-center overflow-hidden border-gray-500 border-b-2 `}
        handler={onChange}
      >
        <img className="cover w-full" src="\img\menu\search.png" alt="Error" />
      </Boton>
    </div>
  );
}

export default Search;
