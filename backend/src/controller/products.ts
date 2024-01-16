import { Request, Response } from "express";
import Product, { IProduct } from "../model/products.ts";

function createRandom(lengthOf: number): string {
  let randomString = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < lengthOf; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

// CREATE
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (req.file) {
      const getNewProductData = {
        Image: req.file.filename,
        ProductId: createRandom(10),
        Name: req.body.Name,
        Description: req.body.Description,
        Amount: req.body.Amount,
        Qty: req.body.Qty,
      };
      const newProduct = new Product(getNewProductData);
      await newProduct.save();
      res.status(200).send("Product Created");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// READ
export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const renderedProduct = await Product.findOne({ ProductId: req.params.id });
    res.status(200).send(renderedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// READ ALL
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allProducts = await Product.find();
    res.status(200).send(allProducts);
  } catch (error) {
    res.status(400).send(error);
  }
};
