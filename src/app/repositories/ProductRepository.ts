import Product from "../entities/Product";
import IProduct from "../interfaces/IProduct";
import { AppDataSource } from "../../database/data-source";

const productRepository = AppDataSource.getRepository(Product);

const getProducts = (): Promise<IProduct[]> => {
    return productRepository.find();
}

export default { getProducts };