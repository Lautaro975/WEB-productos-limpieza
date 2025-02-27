import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Agustiner93",
  database: "WF",
});

export default pool;
