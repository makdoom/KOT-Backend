import pool from "@/config/db";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

type QueryResult<T> = T[] | ResultSetHeader;

// Select Query
export const selectQuery = async <T>(
  queryString: string
): Promise<Partial<T>[]> => {
  try {
    const [result] = await pool.execute(queryString);
    return result as T[];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Update Query (Insert/Update/Delete)
export const updateQuery = async <T>(
  queryString: string,
  data: T
): Promise<QueryResult<T>> => {
  try {
    const [rows] = await pool.execute<ResultSetHeader>(queryString, [data]);
    return rows as QueryResult<T>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const executeQuery = async <T>(
  queryString: string,
  params: unknown
): Promise<T[]> => {
  try {
    const [result] = await pool.execute<RowDataPacket[]>(queryString, [params]);
    return result as T[];
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
};
