import "reflect-metadata"
import { DataSource } from "typeorm"
import Product from "../app/entities/Product"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "@Academia01@",
    database: "desafio_tecnico",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})
