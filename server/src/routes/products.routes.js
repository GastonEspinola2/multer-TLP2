import { Router } from "express";
import { createrProductControl } from "../controllers/product.controller.js";
import { uploadImage } from "../middlewares/upload.middleware.js";

const productsRouter = Router();

productsRouter.post('/', uploadImage, createrProductControl)

export { productsRouter }