import { Router } from "express";
import { ProductoController } from "../controllers/producto.controller";


export default class ProductoRouter{

    private router: Router;
    private productoController: ProductoController;

    constructor(){
        this.productoController = new ProductoController();
    }

    public iniciar(express: any){
        this.router = express.Router();

        this.router.post('/', this.productoController.crearProducto);
        this.router.get('/', this.productoController.getProductos,);
        this.router.delete('/:id', this.productoController.eliminarProducto);
    }


    
    public obtenerRutas(){
        return this.router;
    }
    
}




