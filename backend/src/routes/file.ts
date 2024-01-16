import express, { Router, Request, Response } from "express";
import { downloadFile } from "../controller/file.ts";

const router: Router = express.Router();

router.get("/:id", (req: Request, res: Response) => downloadFile(req, res));

export default router;
