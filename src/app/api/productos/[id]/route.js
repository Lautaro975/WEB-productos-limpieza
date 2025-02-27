import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request, { params }) {
  try {
    console.log(params);
    console.log("jsad");

    const result = await pool.query(
      `SELECT * FROM productos WHERE id_producto=${params.id}`
    );
    if (result.lenght == 0) {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json({ message: result[0] });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
export function PUT() {
  return NextResponse.json("hola");
}
export function DELETE() {
  return NextResponse.json("hola");
}
