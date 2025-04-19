import CardProducto from "../cardProducto/cardProducto";
import { motion } from "framer-motion";
import Boton from "../boton/boton";

function Galeria({ galeria, fullX, recorrer, data, loading, error }) {
  return (
    <div className="relative w-full">
      <div
        className="flex  space-x-4 w-screen overflow-y-hidden pb-8 px-8
          overflow-x-hidden  sm:pl-16   "
        ref={galeria}
      >
        {data?.productos?.map((producto) => (
          <motion.div
            key={producto?.id_producto}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`p-2 h-full w-32 flex flex-col justify-around 
            items-center text-[#fff] border-4 border-[#fff] 
            shadow-[8px_8px_20px_black] gap-2
            sm:w-56`}
            >
              <CardProducto producto={producto} />
            </div>
          </motion.div>
        ))}
      </div>
      {fullX ? (
        <Boton
          handler={recorrer}
          classParams={`absolute top-[40%] right-0  w-10 h-10 `}
          type="button"
        >
          <img
            loading="lazy"
            className="w-full h-full animate-pulse "
            src="\img\galeria\flechaDerecha.png"
            alt="Error"
          />
        </Boton>
      ) : (
        <Boton
          handler={recorrer}
          classParams={`absolute top-[40%] left-0 w-10 h-10`}
          type="button"
        >
          <img
            loading="lazy"
            className="w-full h-full animate-pulse"
            src="\img\galeria\flechaIzquierda.png"
            alt="Error"
          />
        </Boton>
      )}
    </div>
  );
}

export default Galeria;
