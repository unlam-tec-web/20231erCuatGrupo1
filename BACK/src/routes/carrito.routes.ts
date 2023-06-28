import { Router } from "express";
import {CarritoController} from "../controllers/carrito.controller";


export default class CarritoRouter {

    private router: Router;
 private carritoController: CarritoController;

    constructor() {

        this.carritoController= new CarritoController();
    }

    public iniciar(express: any) {
        this.router = express.Router();

        this.router.post('/:cartId', this.carritoController.getProductosDeCarrito);

    }

    public obtenerRutas() {
        return this.router;
    }
}