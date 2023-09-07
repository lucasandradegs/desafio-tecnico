import { Request, Response, Router } from "express"
import PackRepository from "../repositories/PackRepository"
import Pack from "../entities/Pack"
import IPack from "../interfaces/IPack"

const packRouter = Router();

packRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const packs = await PackRepository.getPacks()
    return res.status(200).json(packs)
})

export default packRouter;