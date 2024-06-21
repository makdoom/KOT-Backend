/* eslint-disable */
import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.json({
      message: error.message,
      statusCode: error.statusCode,
      stack: error.stack,
    });
  }
};

export default globalErrorHandler;
