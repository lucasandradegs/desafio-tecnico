import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('products')

class Product {
    @PrimaryColumn('bigint')
    code: number;

    @Column({type: "varchar", width: 100, nullable: false})
    name: string;

    @Column({type: "decimal", precision: 9, scale: 2, nullable: false})
    cost_price: number

    @Column({type: "decimal", precision: 9, scale: 2, nullable: false})
    sales_price: number
}

export default Product;