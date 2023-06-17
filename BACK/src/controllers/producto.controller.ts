import { Request, Response } from "express";
import { ProductoService } from "../services/producto.service";

export class ProductoController {
  private productoServicio: ProductoService;

  constructor() {
    this.productoServicio = new ProductoService();
  }

  crearProducto = async (req: Request, res: Response) => {
    try {
      const producto = await this.productoServicio.crearProducto(req)
      res.send(producto);
    } catch (e) {
      if (e instanceof Error) {
        res.status(500);
        res.send({ error: e.message });
      }
    }
  }

  getProductos = async (req: Request, res: Response) => {
    try {
      const productos = await this.productoServicio.getProductos(req);
      res.send(productos);
    } catch (e) {
      res.status(500);
      res.send({ error: e });
    }
  }

  eliminarProducto = async(req: Request, res: Response) => {

    try{
      const idAEliminar: number = parseInt(req.params.id);
      const resultado = await this.productoServicio.eliminarProducto(idAEliminar);
      res.send(resultado);
    }catch (e) {
      res.status(500);
      res.send({ error: e });
    }
  }

  getProductoId = async(req: Request, res: Response) => {
    try{
      const idABuscar: number = parseInt(req.params.id);
      const resultado = await this.productoServicio.getProductoId(idABuscar);
      res.send(resultado);
    }catch (e) {
      res.status(500);
      res.send({ error: e });
    }
  }


}
