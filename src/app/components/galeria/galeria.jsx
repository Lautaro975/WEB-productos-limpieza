import ImagenProducto from "../imagenProducto/imagenProducto";
import { motion } from "framer-motion";
import Boton from "../boton/boton";

function Galeria({ galeria, fullX, idProductos, recorrer }) {
  return (
    <div className="relative w-full">
      <div
        className="flex  space-x-4 w-screen overflow-y-hidden pb-8 px-8
          overflow-x-hidden  sm:pl-16   "
        ref={galeria}
      >
        {idProductos.map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <ImagenProducto idProducto={id} classProps="hover:opacity-50" />
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
