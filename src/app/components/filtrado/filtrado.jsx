import Link from "next/link";

function Filtrar({ data, tipodata, label }) {
  return (
    <div className="w-full flex flex-col pt-8 pl-4 gap-2 scroll-py-8">
      <h5 className="text-[.9em] border-b-2 border-blue-700 w-1/2 mb-4">
        {label}
      </h5>
      {data?.[tipodata].map((e, index) => {
        const nuevaCategoria =
          tipodata === "Categoria" ? `categoria=${e.nombre}` : "categoria=";
        const nuevoUso = tipodata === "TipoUso" ? `uso=${e.nombre}` : `uso=`;

        return (
          <Link
            key={index}
            className="text-[.7em]"
            href={`/producto/uso-categoria?${nuevaCategoria}&${nuevoUso}`}
          >
            {e.nombre}
          </Link>
        );
      })}
    </div>
  );
}

export default Filtrar;
