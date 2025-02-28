export function Search(props) {
  return (
    <div className={`${props.className} flex justify-center items-center`}>
      <input
        placeholder="Buscar productos..."
        className="w-1/2  bg-gray-500 pl-4 h-10 outline-none md:h-7 text-[#fff]"
      ></input>
      <button
        type="button"
        className=" w-12 bg-[#9EB3C2] h-10 md:h-7 flex justify-center items-center overflow-hidden  "
      >
        <img className="cover w-3/4" src="\img\menu\search.png" alt="Error" />
      </button>
    </div>
  );
}

export default Search;
