import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  ProductId: string;
  Name: string;
  Description: string;
  Amount: number;
  Image: string;
  Qty: number;
}

const ProductSchema: Schema<IProduct> = new mongoose.Schema(
  {
    ProductId: {
      type: String,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Amount: {
      type: Number,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    Qty: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;
