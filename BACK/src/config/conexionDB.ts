import { DataSource } from "typeorm";
//import {Usuario} from "../entities/Usuario";
import { Producto } from "../entities/Producto";


export const AppDataSource = new DataSource({
    type:"mysql",
    host:'localhost',
    username: 'root',
    password: '',
    port: 3306,
    database: 'grupo-1',
    entities: [Producto],
    //entities: [Usuario, Producto],
    logging:true,
    synchronize: true
})
