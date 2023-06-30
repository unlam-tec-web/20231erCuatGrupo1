import { Request, Response } from "express";
import { UsuarioServicio } from "../services/usuario.service"

export class UsuarioController {

    private usuarioServicio: UsuarioServicio;

    constructor() {
        this.usuarioServicio = new UsuarioServicio();
    }

    registrarUsuario = (req: Request, res: Response) => {
        this.usuarioServicio.registrarUsuario(req)
            .then((mensaje) => {
                res.send(mensaje);
            })
            .catch(e => {
                if (e instanceof Error) {
                    res.status(500);
                    res.send({ error: e.message });
                }
            });
    }

    autenticarUsuario = (req: Request, res: Response) => {
        this.usuarioServicio.autenticarUsuario(req)
            .then(result => {
                res.send(result);
            })
            .catch(e => {
                if (e instanceof Error) {
                    res.status(500);
                    res.send({ error: e.message });
                }
            });
    }

}