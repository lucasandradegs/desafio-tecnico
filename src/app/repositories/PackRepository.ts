import Pack from "../entities/Pack";
import IPack from "../interfaces/IPack";
import { AppDataSource } from "../../database/data-source";
import Product from "../entities/Product";

const productRepository = AppDataSource.getRepository(Product);
const packRepository = AppDataSource.getRepository(Pack);

const getPacks = (): Promise<IPack[]> => {
    return packRepository.find()
}

export default { getPacks }