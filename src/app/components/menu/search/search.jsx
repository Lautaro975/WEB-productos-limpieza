import Boton from "../../boton/boton";

export function Search(props, handler) {
  return (
    <div className={`${props.className} flex justify-center items-center`}>
      <input
        placeholder="Buscar productos..."
        className="w-1/2  bg-gray-500 pl-4 h-10 outline-none sm:h-7 text-[#fff]"
      ></input>
      <Boton
        type="button"
        classParams=" w-12 bg-[#9EB3C2] h-10 sm:h-7 flex justify-center items-center overflow-hidden "
        handler={handler}
      >
        <img className="cover w-3/4" src="\img\menu\search.png" alt="Error" />
      </Boton>
    </div>
  );
}

export default Search;
