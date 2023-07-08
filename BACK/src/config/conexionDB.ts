import { DataSource } from "typeorm";
import { Marca } from "../entities/Marca";
import { Producto } from "../entities/Producto";
import { Categoria } from "../entities/Categoria";
import { Imagen } from "../entities/Imagen";

export const AppDataSource = new DataSource({
    type:"mysql",
    host:'localhost',
    username: 'root', 
    password: '',
    port: 3306,
    database: 'grupo-1',
    entities: [Producto, Marca, Categoria, Imagen],
    logging:true,
    synchronize: true
})
