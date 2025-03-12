"use client";
import { useState } from "react";
import Aplicacion from "./components/aplicaciones/aplicacion";
import ImagenProducto from "@/app/components/imagenProducto/imagenProducto";
import { motion } from "framer-motion";
import { paramsAplicacion } from "./data/aplicacionParams";
import { idProductos } from "./data/idProductosHome";

export default function Home() {
  const [value, setValue] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [fullY, setY] = useState(true);

  const change = (color) => {
    if (value && selectedColor === color) {
      setValue(false);
      setSelectedColor("");
    } else {
      setValue(true);
      setSelectedColor(color);
    }
  };
  return (
    <section className="w-full bg-zinc-900 flex justify-center items-center flex-col snap-y snap-mandatory">
      <picture className="w-full sm:h-[calc(100dvh-64px)]">
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
        sm:p-12 sm:w-full sm:max-w-xl z-10"
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

          {fullY ? (
            <div className="absolute top-1/4 right-0  w-10 h-10">
              <img
                className="w-full h-full"
                src="\img\galeria\flechaDerecha.png"
                alt="Error"
              />
            </div>
          ) : (
            <div className="absolute top-1/2 left-0 w-10 h-10">
              <img
                className="w-full h-full"
                src="\img\galeria\flechaIzquierda.png"
                alt="Error"
              />
            </div>
          )}
        </div>
      </motion.section>
    </section>
  );
}
