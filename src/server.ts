import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import routers from './app/routes/routes';
import AppError from './app/utils/AppError';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: `error`,
            message: error.message
        })
    }

    console.log(error)

    return res.status(500).json({
        status: `error`,
        message: `Internal server error`
    })
})

AppDataSource.initialize().then(async () => {
    console.log('Database running');
    app.listen(3333, () => {
        console.log(`Server is running on PORT 3333`)
    })
})