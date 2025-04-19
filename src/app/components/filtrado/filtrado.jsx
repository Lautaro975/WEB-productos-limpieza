import LinkC from "@/app/components/LinkC/LinkC";

function Filtrar({ tipodata, label, page, limit }) {
  return (
    <div className="w-full flex flex-col pt-8 pl-4 gap-2 scroll-py-8">
      <h5 className="text-[.9em] sm:text-[1.8em] border-b-2 border-blue-700 w-1/2 mb-4">
        {label}
      </h5>
      {tipodata?.map((e, index) => {
        const nuevaCategoria =
          tipodata === "Categoria" ? `categoria=${e.nombre}` : "categoria=";
        const nuevoUso = tipodata === "TipoUso" ? `uso=${e.nombre}` : `uso=`;

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
