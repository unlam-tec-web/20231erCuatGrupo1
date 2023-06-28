import { Request, Response } from "express";

export class CarritoController {

    constructor() {
    }

    getProductosDeCarrito = (req: Request, res: Response) => {
        const productos = req.body;

        res.send(productos);

    }


}
