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

    @Column()
    marca: string;

    @Column()
    stock: string;
    
    @Column()
    descripcion: string;

}