"use client";
import { useState } from "react";
import Aplicacion from "./components/aplicaciones/aplicacion";
import ImagenProducto from "@/app/components/imagenProducto/imagenProducto";

export default function Home() {
  const [value, setValue] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
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
    <section className="w-full  bg-zinc-900 flex justify-center items-center flex-col ">
      <picture className={`w-full md:h-[calc(100dvh-96px)]`}>
        <source media="(max-width: 600px)" srcSet="/img/home/fondoChico.png" />
        <source media="(min-width: 601px)" srcSet="/img/home/fondoGrande.png" />
        <img
          className="w-full md:h-full shadow-xl cover"
          src="/img/home/fondoChico.png"
          alt="Error al cargar"
        />
      </picture>
      <section
        className="grid grid-cols-1 gap-8 justify-center items-center 
      pb-12 pt-12 md:p-12 md:w-full md:max-w-xl z-10"
      >
        <Aplicacion
          url="/img/home/usoPersonal.png"
          onMouseOver={() => change("#007BFF")}
          value={selectedColor === "#007BFF"}
          colorsombra={selectedColor}
          uso={"Uso Personal"}
        />
        <Aplicacion
          url="/img/home/usoProfesional.png"
          onMouseOver={() => change("#FF0000")}
          value={selectedColor === "#FF0000"}
          colorsombra={selectedColor}
          uso={"Uso Profesional"}
        />
        <Aplicacion
          url="/img/home/usoFabrica.png"
          onMouseOver={() => change("#FF5722")}
          value={selectedColor === "#FF5722"}
          colorsombra={selectedColor}
          uso={"Uso Industrial"}
        />
        <Aplicacion
          url="/img/home/fragancia.png"
          onMouseOver={() => change("#FFD700")}
          value={selectedColor === "#FFD700"}
          colorsombra={selectedColor}
          uso={"Perfumes"}
        />
      </section>
      <section className="flex w-full flex-col justify-center items-center pb-8 pt-4 bg-gradient-to-b from-zinc-900 to-zinc-700 gap-8">
        <h2 className="font-[Oswald] text-white text-3xl">
          Detalles del producto
        </h2>
        <div className="flex overflow-x-auto space-x-4 w-screen ">
          <ImagenProducto idProducto="1" classProps="hover:opacity-50" />
          <ImagenProducto idProducto="2" />
          <ImagenProducto idProducto="3" />
          <ImagenProducto idProducto="4" />
        </div>
      </section>
    </section>
  );
}
