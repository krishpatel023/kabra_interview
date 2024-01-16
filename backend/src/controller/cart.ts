import { Request, Response } from "express";
import Cart, { CartI, CartItem } from "../model/cart.ts";

// CREATE
export const createCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newProduct = new Cart(req.body as CartI);
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// READ
export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const renderedProduct = await Cart.findOne({ userId: req.params.id });
    res.status(200).send(renderedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};
// UPDATE CART
export const UpdateCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newCart: CartItem[] = req.body.items;

    await Cart.findOneAndUpdate(
      { userId: req.params.id },
      {
        $set: {
          userId: req.params.id,
          items: newCart,
        },
      }
    );

    res.status(200).send("CART UPDATED");
  } catch (error) {
    res.status(403).send(error);
  }
};
