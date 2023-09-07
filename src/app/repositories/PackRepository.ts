import Pack from "../entities/Pack";
import IPack from "../interfaces/IPack";
import { AppDataSource } from "../../database/data-source";
import AppError from "../utils/AppError";

const packRepository = AppDataSource.getRepository(Pack);

const getPacks = (): Promise<IPack[]> => {
    return packRepository.find()
}

export default { getPacks }