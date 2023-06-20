import { Router } from "express";
import { MarcaController } from "../controllers/marca.controller";
import { ProductoController } from "../controllers/producto.controller";
import { CategoriaController } from "../controllers/categoria.controller";

export default class ProductoRouter{

    private router: Router;
    private marcaController: MarcaController;
    private productoController: ProductoController;
    private categoriaController: CategoriaController;

    constructor(){
        this.productoController = new ProductoController();
        this.marcaController = new MarcaController();
        this.categoriaController = new CategoriaController();
    }

    public iniciar(express: any){
        this.router = express.Router();

        this.router.get('/marca', this.marcaController.getMarcas);
        this.router.get('/categoria', this.categoriaController.getCategorias);

        this.router.post('/', this.productoController.crearProducto);
        this.router.get('/', this.productoController.getProductos);
        this.router.get('/:id', this.productoController.getProductoId);
    }

    public obtenerRutas(){
        return this.router;
    }

}




