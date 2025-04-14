import { NextResponse } from "next/server";
import pool from "@/lib/mysql";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const uso = searchParams.get("uso");
    const categoria = searchParams.get("categoria");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;

    let query = `
      SELECT p.*, i.*, t.nombre AS uso_nombre, c.nombre AS categoria_nombre
      FROM productos p
      LEFT JOIN imagenes i ON i.id_producto = p.id_producto
      INNER JOIN tipos_uso t ON p.id_uso = t.id_uso 
      INNER JOIN categorias c ON c.id_categoria = p.id_categoria
    `;

    let conditions = [];
    let values = [];

    if (uso) {
      conditions.push(`t.nombre = ?`);
      values.push(uso);
    }

    if (categoria) {
      conditions.push(`c.nombre = ?`);
      values.push(categoria);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    query += " LIMIT ? OFFSET ?";
    values.push(limit, offset);

    const [result] = await pool.query(query, values);

    // Contar cuántos productos hay en total (sin paginar)
    let countQuery = `
      SELECT COUNT(*) as total
      FROM productos p
      INNER JOIN tipos_uso t ON p.id_uso = t.id_uso
      INNER JOIN categorias c ON c.id_categoria = p.id_categoria
    `;
    if (conditions.length > 0) {
      countQuery += " WHERE " + conditions.join(" AND ");
    }
    const [countResult] = await pool.query(countQuery, values.slice(0, -2));
    const total = countResult[0].total;

    const hasMore = offset + result.length < total;

    return NextResponse.json({
      productos: result,
      hasMore,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Error interno" },
      { status: 500 }
    );
  }
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
