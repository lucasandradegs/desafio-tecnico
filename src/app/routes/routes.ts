import { Router } from "express";
import productRouter from "../controllers/ProductController";

const routers = Router();

routers.use('/products', productRouter)

export default routers;