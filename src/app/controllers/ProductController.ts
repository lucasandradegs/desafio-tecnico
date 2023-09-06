import { Request, Response, Router } from "express";
import Product from "../entities/Product";
import ProductRepository from "../repositories/ProductRepository"
import IProduct from "../interfaces/IProduct";

const productRouter = Router();

productRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const products = await ProductRepository.getProducts();
    return res.status(200).json(products)
});

export default productRouter;