import LinkC from "@/app/components/LinkC/LinkC";

function Filtrar({ tipodata, label, page, limit, uso }) {
  return (
    <div className="w-full flex flex-col pt-8 pl-4 gap-2 scroll-py-8">
      <h5 className="text-[.9em] sm:text-[1.2em] border-b-2 border-blue-700 w-1/2 mb-4">
        {label}
      </h5>
      {tipodata?.map((e, index) => {
        let nuevaCategoria;
        let nuevoUso;
        if (uso !== "") {
          nuevaCategoria = "";
          nuevoUso = e.nombre;
        } else {
          nuevaCategoria = e.nombre;
          nuevoUso = "";
        }

        return (
          <LinkC
            categoria={nuevaCategoria}
            uso={nuevoUso}
            key={index}
            page={page}
            limit={limit}
            children={e.nombre}
          ></LinkC>
        );
      })}
    </div>
  );
}

export default Filtrar;
