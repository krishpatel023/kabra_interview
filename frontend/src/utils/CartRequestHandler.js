import axios from "axios";
import { backendURL, config, userId } from "./utils";

export const createCart = async () => {
  await axios.post(
    `${backendURL}/cart/createCart`,
    {
      userId: userId,
      items: [],
    },
    config
  );
};

export const getCart = async () => {
  const data = await axios.get(`${backendURL}/cart/${userId}`, config);
  if (data.data === "") {
    createCart();
    return [];
  } else {
    return data.data.items;
  }
};

export const updateCart = async (updatedCart) => {
  await axios.put(
    `${backendURL}/cart/${userId}`,
    {
      userId: userId,
      items: updatedCart,
    },
    config
  );
};
