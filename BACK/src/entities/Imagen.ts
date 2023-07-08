import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('imagen')
export class Imagen extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fecha_carga: Date

    @Column({ nullable: true }) 
    fecha_eliminacion: Date;

    @Column()
    isEliminado: boolean;

    @Column()
    nombre: string;

    @Column()
    ubicacion: string;

}