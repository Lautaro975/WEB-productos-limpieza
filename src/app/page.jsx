"use client";
import { useRef, useState } from "react";
import Aplicacion from "./components/Aplicacion/aplicacion";
import { motion } from "framer-motion";
import { paramsAplicacion } from "./data/aplicacionParams";
import Galeria from "./components/galeria/galeria";
import Footer from "./components/footer/footer";
import useFetch from "./hook/useFetch/useFetch";

export default function Home() {
  let {
    data: producto,
    loading = true,
    error,
  } = useFetch(
    `http://localhost:3000/api/productos?categoria=&uso=&page=1&limit=12`,
    "GET"
  );
  const [value, setValue] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [fullX, setX] = useState(true);
  const galeriaref = useRef(null);

  const change = (color) => {
    if (value && selectedColor === color) {
      setValue(false);
      setSelectedColor("");
    } else {
      setValue(true);
      setSelectedColor(color);
    }
  }; //Esta funcion lo que hace es cuando el valor

  const recorrerX = () => {
    const { scrollLeft, scrollWidth, clientWidth } = galeriaref.current;
    if (scrollLeft + clientWidth >= scrollWidth - 100) {
      setX(false);
    } else if (scrollLeft <= 100) {
      setX(true);
    }
  }; //Esta funcion lo que hace cambia de estado del fullX cuando llega al principio o al final del X
  const recorrer = () => {
    if (!galeriaref.current) return;
    const desplazamiento = 100;
    galeriaref.current.scrollBy({
      left: fullX ? desplazamiento : -desplazamiento,
      behavior: "smooth",
    });
    recorrerX();
  }; //Esta funcion recorre la galeria de productos
  return (
    <main
      className="w-full bg-zinc-900 snap-y snap-mandatory overflow-hidden 
      flex justify-center items-center flex-col"
    >
      <picture className="w-full sticky top-0 sm:h-[calc(100dvh-64px)] ">
        <source media="(max-width: 600px)" srcSet="/img/home/fondoChico.png" />
        <source media="(min-width: 601px)" srcSet="/img/home/fondoGrande.png" />
        <img
          loading="lazy"
          className="w-full h-full sm:h-full shadow-xl"
          src="/img/home/fondoChico.png"
          alt="Error al cargar"
        />
      </picture>

      <section
        className="mt-8 grid grid-cols-1 gap-8 justify-center items-center pb-12 pt-12 snap-start 
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
        bg-gradient-to-b from-zinc-900 to-zinc-700 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[Oswald] text-white text-2xl">
          PRODUCTOS DESTACADOS
        </h2>
        {loading ? (
          <h2>Cargando productos...</h2>
        ) : (
          <Galeria
            galeria={galeriaref}
            fullX={fullX}
            recorrer={recorrer}
            data={producto}
            loading={loading}
            error={error}
          />
        )}
      </motion.section>
      <Footer></Footer>
    </main>
  );
}
