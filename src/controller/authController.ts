import { loginService } from "@/services/authService";
import { RequestType } from "@/types";
import { AppError } from "@/utils/AppError";
import { AppResponse } from "@/utils/AppResponse";
import AsyncHandler from "@/utils/AsyncHandler";
import { NextFunction, Request, Response } from "express";

export const loginRoute = AsyncHandler(
  async (
    req: Request<unknown, unknown, RequestType>,
    res: Response,
    next: NextFunction
  ) => {
    const { username, password, machinename } = req.body;

    console.log({ username, password, machinename });
    if (!username)
      return res.json(new AppResponse(400, "Username not provided", null));

    if (!password)
      return res.json(new AppResponse(400, "Password not provided", null));

    console.log("callling service");
    const result = await loginService({
      username,
      userpassword: password,
      machinename,
    });

    if (result[0]?.message) {
      return next(new AppError(500, result[0].message, null));
    }

    res.json(new AppResponse(200, "Login successfull", result));
  }
);
