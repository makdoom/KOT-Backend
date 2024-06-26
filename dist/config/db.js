import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const pool = createPool({
    host: process.env["DB_HOST"] || "",
    port: Number(process.env["DB_HOST"]),
    user: process.env["DB_USER"] || "",
    password: process.env["DB_PASSWORD"] || "",
    database: process.env["DB_NAME"] || "",
    connectTimeout: 100000,
    waitForConnections: true,
    connectionLimit: 10, // Adjust based on your server's capacity
    queueLimit: 0,
});
export const getDBConnection = async () => {
    return pool.getConnection();
};
// export default pool;
// import Logger from "../logger/index.js";
// import { createConnection } from "mysql2/promise";
// export const getDBConnection = async () => {
//   const dbConnection = await createConnection({
//     host: process.env["DB_HOST"] || "",
//     port: Number(process.env["DB_HOST"]),
//     user: process.env["DB_USER"] || "",
//     password: process.env["DB_PASSWORD"] || "",
//     database: process.env["DB_NAME"] || "",
//   });
//   return dbConnection;
// };
// export const connectDB = async () => {
//   try {
//     const connection = await getDBConnection();
//     await connection.connect();
//     Logger.info("✅ DB Connected");
//   } catch (error) {
//     Logger.error(error);
//   }
// };
