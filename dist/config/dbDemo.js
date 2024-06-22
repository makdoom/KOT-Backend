import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const getDBConnection = async () => {
    //   try {
    const pool = createPool({
        host: process.env["DB_HOST"] || "",
        port: Number(process.env["DB_HOST"]),
        user: process.env["DB_USER"] || "",
        password: process.env["DB_PASSWORD"] || "",
        database: process.env["DB_NAME"] || "",
    });
    const connection = await pool.getConnection();
    return connection;
    //   } catch (error) {
    // Logger.error(error);
    //   }
};
const selectQuery = async (queryString) => {
    const connection = await getDBConnection();
    const [result] = await connection.execute(queryString);
    return result;
};
const main = async () => {
    // const connection = await getDBConnection();
    // const [rows] = await connection.execute<userRow[] & RowDataPacket[][]>(
    //   "SELECT * FROM TEST"
    // );
    // console.log(rows);
    // connection?.release();
    selectQuery("SELECT * FROM TEST").then((data) => console.log(data));
};
main();
