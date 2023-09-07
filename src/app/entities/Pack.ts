import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Product from "./Product";

@Entity('packs')

class Pack {
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @Column({type: "bigint", nullable: false})
    pack_id: number

    @Column({type: "bigint", nullable: false})
    product_id: number

    @Column({type: "bigint", nullable: false})
    qty: number

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'pack_id', referencedColumnName: 'code' })
    pack: Product;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id', referencedColumnName: 'code' })
    product: Product;
}

export default Pack;