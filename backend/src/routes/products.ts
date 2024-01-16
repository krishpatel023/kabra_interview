import express, { Router, Request, Response } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controller/products.ts";
import { upload } from "../controller/file.ts";

const router = express.Router();

//CREATE
router.post(
  "/createProduct",
  upload.single("file"),
  (req: Request, res: Response) => createProduct(req, res)
);
//GET
router.get("/:id", (req: Request, res: Response) => getProduct(req, res));
//GET ALL
router.get("/", (req: Request, res: Response) => getAllProducts(req, res));

export default router;
