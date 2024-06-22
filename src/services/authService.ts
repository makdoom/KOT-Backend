import { executeQuery } from "@/config/queryUtils";
import { loginPayload, loginReponsePayload } from "@/types/login.types";

export const loginService = async (data: loginPayload) => {
  console.log("using get db connectoin");
  const response = await executeQuery<loginReponsePayload[]>(
    `CALL ValidateUser(?)`,
    data
  );
  const rows = response[0] as loginReponsePayload[];
  return rows;
};
