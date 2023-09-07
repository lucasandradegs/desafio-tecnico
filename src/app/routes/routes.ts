import { Router } from "express";
import productRouter from "../controllers/ProductController";
import packRouter from "../controllers/PackController";

const routers = Router();

routers.use('/products', productRouter)
routers.use('/packs', packRouter)

export default routers;