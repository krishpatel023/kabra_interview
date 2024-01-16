import { Request, Response } from "express";
import multer, { StorageEngine } from "multer";

const storage: StorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    // where to store the file
    return cb(null, "localStorage/");
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.substring(
      file.originalname.lastIndexOf(".") + 1
    );
    return cb(null, createRandom(20) + "." + extension);
  },
});

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

export const upload = multer({ storage });

export const downloadFile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const file = id;
    const filePath = `../backend/localStorage/${file}`;
    res.download(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
