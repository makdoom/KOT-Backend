import { StatusCode } from "@/types";

export class AppResponse {
  public readonly statusCode: StatusCode;
  public readonly message: string;
  public readonly data: unknown;

  constructor(statusCode: StatusCode, message: string, data: unknown) {
    (this.statusCode = statusCode), (this.message = message);
    this.data = data;
  }
}
