import Boton from "@/app/components/boton/boton";

const CardProducto = ({ producto }) => {
  return (
    <>
      {producto ? (
        <>
          <div className="w-full h-min sm:h-full">
            <img
              loading="lazy"
              className="h-full sm:bg-cover sm:h-full"
              src={producto?.url}
              alt="Error al cargar la imagen"
            />
          </div>
          <h3 className="sm:text-[1.4em] text-[0.8em] text-pretty text-center">
            {producto?.nombre}
          </h3>
          <p className="sm:text-[1em] text-[0.8em] stext-pretty text-center">
            {producto?.categoria_nombre}
          </p>
          <p className="sm:text-[0.9em] text-[0.8em] text-pretty text-center">
            {producto?.formato}
          </p>
          <Boton
            type="button"
            handler={() => {}}
            label="Añadir"
            classParams="bg-blue-700 text-white text-[0.8em] sm:text-[1em] text-center text-pretty  px-4 py-2 rounded-3xl max-h-10 hover:opacity-50"
          />
        </>
      ) : (
        <div>"No se encontró la URL"</div>
      )}
    </>
  );
};

export default CardProducto;
