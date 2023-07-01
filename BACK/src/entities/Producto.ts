import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('producto')
export class Producto extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string
    
    @Column()
    precio: number;

    @Column()
    clasificacion: string;

    @Column({
        nullable: true,
    })
    @Column()
    marca: string;

    @Column()
    imagen: string;

    @Column({
        nullable: true,
    })
    stock: number;
    
    @Column()
    descripcion: string;

}