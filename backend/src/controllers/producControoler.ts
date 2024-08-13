import { NextFunction, Request, Response } from "express";
import prisma from "../../config";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
export const createProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: { name, price, productId, stockQuantity, rating },
    });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
