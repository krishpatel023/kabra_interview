import mongoose, { Document, Schema } from "mongoose";

export interface CartItem {
  ProductId: string;
  ProductQty: number;
  Name: string;
  Description: string;
  Amount: number;
  Image: string;
  Qty: number;
}

export interface CartI extends Document {
  userId: string;
  items: CartItem[];
}

const CartSchema = new Schema<CartI>({
  userId: {
    type: String,
    required: true,
  },
  items: [
    {
      ProductId: {
        type: String,
        required: true,
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
        required: true,
      },
      ProductQty: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Cart = mongoose.model<CartI>("Cart", CartSchema);

export default Cart;
