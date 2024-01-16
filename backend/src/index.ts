import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import products from "./routes/products.ts";
import files from "./routes/file.ts";
import cart from "./routes/cart.ts";

const app: Express = express();
const PORT = process.env.PORT || 8000;

// FOR .ENV
app.use(express.json());
dotenv.config();

// CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

// MongoDB CONNECTION
const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.mongoDB as string);
    console.log("CONNECTED --- MongoDB");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("DISCONNECTED --- MongoDB");
  connect();
});

// Routes
app.use("/products", products);
app.use("/files", files);
app.use("/cart", cart);

// BACKEND START
app.listen(PORT, () => {
  connect();
  console.log("CONNECTED --- BACKEND");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Connected to backend");
});
