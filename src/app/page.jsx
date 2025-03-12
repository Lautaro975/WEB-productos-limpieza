"use client";
import { useRef, useState } from "react";
import Aplicacion from "./components/aplicaciones/aplicacion";
import ImagenProducto from "@/app/components/imagenProducto/imagenProducto";
import { motion } from "framer-motion";
import { paramsAplicacion } from "./data/aplicacionParams";
import { idProductos } from "./data/idProductosHome";
import Boton from "./components/boton/boton";

export default function Home() {
  const [value, setValue] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [fullX, setX] = useState(true);
  const galeria = useRef(null);

  const change = (color) => {
    if (value && selectedColor === color) {
      setValue(false);
      setSelectedColor("");
    } else {
      setValue(true);
      setSelectedColor(color);
    }
  };

  const recorrerX = () => {
    const { scrollLeft, scrollWidth, clientWidth } = galeria.current;
    if (scrollLeft + clientWidth >= scrollWidth - 200) {
      setX(false);
    } else if (scrollLeft <= 200) {
      setX(true);
    }
  };
  const recorrer = () => {
    if (!galeria.current) return;
    const desplazamiento = 200;
    galeria.current.scrollBy({
      left: fullX ? desplazamiento : -desplazamiento,
      behavior: "smooth",
    });
    recorrerX();
  };
  return (
    <section
      className="w-full bg-zinc-900 flex justify-center items-center flex-col
     snap-y snap-mandatory overflow-x-hidden overflow-y-hidden"
    >
      <picture className="w-full sm:h-screen sm:mt-[50px]">
        <source media="(max-width: 600px)" srcSet="/img/home/fondoChico.png" />
        <source media="(min-width: 601px)" srcSet="/img/home/fondoGrande.png" />
        <img
          className="w-full sm:h-full shadow-xl cover"
          src="/img/home/fondoChico.png"
          alt="Error al cargar"
        />
      </picture>

      <section
        className="grid grid-cols-1 gap-8 justify-center items-center pb-12 pt-12 snap-start 
        sm:p-12 sm:w-full sm:max-w-xl z-10 "
      >
        {paramsAplicacion.map((item) => (
          <motion.div
            key={item.uso}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <Aplicacion
              url={item.url}
              onMouseOver={() => change(item.color)}
              value={selectedColor === item.color}
              colorsombra={selectedColor}
              uso={item.uso}
            />
          </motion.div>
        ))}
      </section>

      <motion.section
        className="flex w-full flex-col justify-center items-center  
        bg-gradient-to-b from-zinc-900 to-zinc-700 gap-8 py-4
        "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[Oswald] text-white text-3xl">
          PRODUCTOS DESTACADOS
        </h2>
        <div
          className="flex overflow-x-auto space-x-4 w-screen overflow-y-hidden 
          sm:overflow-x-hidden  sm:pl-16 sm:pb-8 sm:relative pb-4 "
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

          {fullX ? (
            <Boton
              handler={recorrer}
              classParams={`fixed top-1/2 right-0  w-10 h-10`}
              type="button"
            >
              <img
                className="w-full h-full"
                src="\img\galeria\flechaDerecha.png"
                alt="Error"
              />
            </Boton>
          ) : (
            <Boton
              handler={recorrer}
              classParams={`fixed top-1/2 left-0 w-10 h-10`}
              type="button"
            >
              <img
                className="w-full h-full"
                src="\img\galeria\flechaIzquierda.png"
                alt="Error"
              />
            </Boton>
          )}
        </div>
      </motion.section>
    </section>
  );
}
