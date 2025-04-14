import pool from "@/lib/mysql";


export default async function GET(request, { params }) {
    const { nombre } = await params;
    try {
        const result = pool.query(`SELECT nombre FROM productos WHERE nombre==${nombre}`);
        if ((await result).length == 0) {
            throw console.error();
            
        }
    } catch (error) {
        
    }
}