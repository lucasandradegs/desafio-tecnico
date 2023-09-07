import "reflect-metadata"
import { DataSource } from "typeorm"
import Product from "../app/entities/Product"
import Pack from "../app/entities/Pack"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "desafio_tecnico",
    synchronize: true,
    logging: false,
    entities: [Product, Pack],
    migrations: [],
    subscribers: [],
})
