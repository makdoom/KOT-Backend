import pool from "../config/db.js";
// Select Query
export const selectQuery = async (queryString) => {
    try {
        const [result] = await pool.execute(queryString);
        return result;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
// Update Query (Insert/Update/Delete)
export const updateQuery = async (queryString, data) => {
    try {
        const [rows] = await pool.execute(queryString, [data]);
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
export const executeQuery = async (queryString, params) => {
    try {
        const [result] = await pool.execute(queryString, [params]);
        return result;
    }
    catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
};
