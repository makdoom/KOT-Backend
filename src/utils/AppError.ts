type StatusCode = 200 | 300 | 400 | 500;

export class AppError extends Error {
  public readonly statusCode: StatusCode;
  public readonly message: string;
  public readonly error: Error | null;

  constructor(statusCode: StatusCode, message: string, error: Error | null) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error;

    Error.captureStackTrace(this);
  }
}
