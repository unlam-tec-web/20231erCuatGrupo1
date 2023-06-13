import "reflect-metadata";
import app from "./app";
import {AppDataSource} from "./config/conexionDB";

async function main() {
    try{
        await AppDataSource.initialize();
        console.log("Database connected");
        app.listen(3000)
        console.log("Server is listen",3000);
    }catch(err){
        console.log(err);
        
    }
}

main();