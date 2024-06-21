import { executeQuery } from "@/config/queryUtils";
import { loginPayload, loginReponsePayload } from "@/types/login.types";

export const loginService = async (data: loginPayload) => {
  const response = await executeQuery<loginReponsePayload[]>(
    `CALL ValidateUser(?)`,
    data
  );
  const rows = response[0] as loginReponsePayload[];
  return rows;
};
