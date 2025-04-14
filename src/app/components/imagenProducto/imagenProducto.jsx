import useFetch from "@/app/hook/useFetch/useFetch";
import Boton from "@/app/components/boton/boton";
function ImagenProducto({ idProducto, classProps }) {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/productos/${idProducto}`,
    "GET"
  );
  return (
    <>
      {data ? (
        <div
          className={` p-2 min-w-44 flex flex-col justify-center h-full
            items-center text-[#fff]  border-4 border-[#fff] 
            shadow-[8px_8px_20px_black] gap-2
            `}
        >
          <div className="w-full sm:h-full  ">
            <img
              loading="lazy"
              className="w-full  sm:bg-cover sm:h-full "
              src={data.message[0].url}
              alt="Error a cargar la imagen"
            />
          </div>
          <h3 className="sm:text-[1em]">{data.message[0].nombre}</h3>
          <p className="sm:text-[0.7em]">{data.message[0].formato}</p>
          <Boton
            type="button"
            handler={() => {}}
            label="Añadir al carrito"
            classParams="bg-cyan-800 text-white px-4 py-2 rounded-3xl h-full hover:opacity-50"
          ></Boton>
        </div>
      ) : (
        <div>{error} " No se encontró el data"</div>
      )}
    </>
  );
}

export default ImagenProducto;
