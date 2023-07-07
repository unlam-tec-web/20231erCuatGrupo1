import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categoria')
export class Categoria extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    descripcion: string;

    @Column()
    imagen: string;
    
}