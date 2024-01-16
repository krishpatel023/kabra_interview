import { UpdateCart, createCart, getCart } from "../controller/cart.ts";
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

//CREATE
router.post("/createCart", (req: Request, res: Response) =>
  createCart(req, res)
);
//GET
router.get("/:id", (req: Request, res: Response) => getCart(req, res));
//GET ALL
router.put("/:id", (req: Request, res: Response) => UpdateCart(req, res));

export default router;
