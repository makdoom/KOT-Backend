import { executeQuery } from "../config/queryUtils.js";
export const loginService = async (data) => {
    console.log("using get db connectoin");
    const response = await executeQuery(`CALL ValidateUser(?)`, data);
    const rows = response[0];
    return rows;
};
