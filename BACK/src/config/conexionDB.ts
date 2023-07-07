import { DataSource } from "typeorm";
//import {Usuario} from "../entities/Usuario";
import { Marca } from "../entities/Marca";
import { Producto } from "../entities/Producto";
import { Categoria } from "../entities/Categoria";

export const AppDataSource = new DataSource({
    type:"mysql",
    host:'localhost',
    username: 'root', 
    password: '',
    port: 3306,
    database: 'grupo-1',
    entities: [Producto, Marca, Categoria],
    //entities: [Usuario, Producto],
    logging:true,
    synchronize: true
})
