import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('marca')
export class Marca extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    descripcion: string;

    @Column()
    imagen: string;
    
}