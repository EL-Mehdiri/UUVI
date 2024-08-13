import { NextFunction, Request, Response } from "express";
import prisma from "../../config";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.users.findMany();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
