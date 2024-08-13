import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack); // Log the error for debugging

  res.status(500).json({
    message: "An unexpected error occurred. Please try again later.",
    error: err.message, // Optional: Include the error message for debugging
  });
};
