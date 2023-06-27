import { Request, Response } from "express";
import { ProductoService } from "../services/producto.service";

export class ProductoController {
  private productoServicio: ProductoService;

  constructor() {
    this.productoServicio = new ProductoService();
  }


  crearProducto = (req: Request, res: Response) => {
    this.productoServicio.crearProducto(req)
      .then(producto => {
        res.send(producto);
      })
      .catch(e => {
        if (e instanceof Error) {
          res.status(500);
          res.send({ error: e.message });
        }
      });
  }

  getProductos = (req: Request, res: Response) => {
    this.productoServicio.getProductos()
    .then(productos => {
      res.send(productos);
    })
    .catch(e => {
      res.status(500);
      res.send({ error: e });
    })
    
  }

  getProductoId = (req: Request, res: Response) => {
    const idABuscar: number = parseInt(req.params.id);
    this.productoServicio.getProductoId(idABuscar)
      .then(resultado => {
        res.send(resultado);
      })
      .catch(e => {
        res.status(500);
        res.send({ error: e });
      });
    }


}
