"use client";
import { useState } from "react";
import Aplicacion from "./components/aplicaciones/aplicacion";

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
    <section className="w-full bg-zinc-900 flex justify-center items-center flex-col">
      <picture className="w-full max-h-96">
        <source media="(max-width: 600px)" srcSet="/img/home/fondoChico.png" />
        <source media="(min-width: 601px)" srcSet="/img/home/fondoGrande.png" />
        <img
          className="w-full md:h-96 shadow-xl cover"
          src="/img/home/fondoChico.png"
          alt="Error al cargar"
        />
      </picture>

      <div
        className="grid grid-cols-1 md:max-w-xl  gap-8 justify-center items-center 
      pb-12 pt-12 md:  md:p-12 md:w-full"
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
      </div>
    </section>
  );
}
