export function Search(props) {
  return (
    <div className={`${props.className} flex justify-center items-center`}>
      <input
        placeholder="Buscar productos..."
        className="w-1/2 rounded-l-3xl bg-slate-200 pl-4 h-10 hover:bg-[white] outline-none"
      ></input>
      <button type="button" className="rounded-r-3xl w-20 bg-[#9EB3C2] h-10">
        🔍
      </button>
    </div>
  );
}

export default Search;
