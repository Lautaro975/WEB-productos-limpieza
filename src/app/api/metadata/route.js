import pool from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categoria = await pool.query(" SELECT c.nombre FROM categorias c");
    const tipoUso = await pool.query(" SELECT t.nombre FROM tipos_uso t");

    return NextResponse.json({
      TipoUso: tipoUso[0],
      Categoria: categoria[0],
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 404,
      }
    );
  }
}
