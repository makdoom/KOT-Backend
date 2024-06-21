import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

type RequestHandlerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const AsyncHandler = (requestHandler: RequestHandlerType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error: Error) => {
      next(new AppError(500, error.message, error));
    });
  };
};

export default AsyncHandler;
