import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET() {
  const result = await pool.query("SELECT * FROM productos");

  return NextResponse.json({ message: result[0] });
}
export async function POST() {
  try {
    const { nombre, descripcion, precio, stock, id_categoria, id_uso } =
      await requestAnimationFrame.json();

    const result = await pool.query("INSERT INTO productos SET ?", {
      nombre,
      descripcion,
      precio,
      stock,
      id_categoria,
      id_uso,
    });
    console.log(result);

    return NextResponse.json({
      id: result.insertId,
      nombre,
      descripcion,
      precio,
      stock,
      id_categoria,
      id_uso,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
