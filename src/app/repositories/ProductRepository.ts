import Product from "../entities/Product";
import IProduct from "../interfaces/IProduct";
import { AppDataSource } from "../../database/data-source";
import AppError from "../utils/AppError";

const productRepository = AppDataSource.getRepository(Product);

const getProducts = (): Promise<IProduct[]> => {
    return productRepository.find();
}

const getUpdatedProduct = async (product_code: string, updatedProduct: Partial<Product>): Promise<Product | null> => {
    try {
        const checkIfProductExist = await productRepository.findOneBy({ code: Number(product_code)})

        if (!checkIfProductExist) {
            return null
        }

        Object.assign(checkIfProductExist, updatedProduct)

        await productRepository.save(checkIfProductExist)

        return checkIfProductExist;
    } catch (error) {
        throw new AppError(`Erro ao atualizar`)
    }
}

const getProductByCode = async (product_code: string): Promise<Product | null> => {
    try {
        const existingProduct = await productRepository.findOneBy({ code: Number(product_code)});

        if (!existingProduct) {
            return null; // Produto não encontrado
        }

        return existingProduct;
    } catch (error) {
        throw error;
    }
}

export default { getProducts, getUpdatedProduct, getProductByCode };