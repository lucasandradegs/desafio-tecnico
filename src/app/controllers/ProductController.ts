import { Request, Response, Router, response } from "express";
import Product from "../entities/Product";
import ProductRepository from "../repositories/ProductRepository"
import IProduct from "../interfaces/IProduct";
import AppError from "../utils/AppError";

const productRouter = Router();

productRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const products = await ProductRepository.getProducts();
    return res.status(200).json(products)
});

productRouter.put('/:code', async (req: Request, res: Response): Promise<Response> => {
    const product_code = req.params.code
    const updatedProduct = req.body

    try {

        const getProductInformation = await ProductRepository.getProductByCode(product_code)

        if(!getProductInformation) {
            return res.status(404).json({ error: `Produto não encontrado na base de dados.`})
        }

        
        if(updatedProduct.new_price > getProductInformation.sales_price * 1.1 || updatedProduct.new_price < getProductInformation.sales_price * 0.9) {
            return res.status(400).json({ error: `Ah não! O time do Marketing está triste. O novo preço não pode ser maior ou menor do que 10% do preço atual do produto.`})
        }
        
        if(updatedProduct.hasOwnProperty("new_price")) {
            if(updatedProduct.new_price < getProductInformation.cost_price) {
                return res.status(400).json({ error: `Ah não! O time do financeiro está triste. O novo preço não pode ser menor do que o preço de custo.`})
            }
            
            updatedProduct.sales_price = updatedProduct.new_price;

            delete updatedProduct.new_price
        }
        
    
        const updatedProducts = await ProductRepository.getUpdatedProduct(product_code, updatedProduct)
    
        if (!updatedProducts) {
            return res.status(404).json({ error: `Não foi possível atualizar o produto (produto não encontrado)`})
        }

        return res.status(200).json(updatedProduct)
    } catch (error){
        
        return res.status(500).json({ error: `Erro do servidor. Não foi possível completar a operação`})

    }
})

export default productRouter;