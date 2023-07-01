import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

export default class UsuarioRouter {

    private router: Router;
    private usuarioController: UsuarioController;

    constructor(){
        this.usuarioController = new UsuarioController();
    }

    public iniciar(express: any){
        this.router = express.Router();

        this.router.post('/usuario/crear', this.usuarioController.registrarUsuario);
        this.router.post('/usuario/verificar', this.usuarioController.autenticarUsuario);
    }

    public obtenerRutas(){
        return this.router;
    }

}
