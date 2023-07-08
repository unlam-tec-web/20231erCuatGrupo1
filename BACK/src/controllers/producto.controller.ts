import { Request, Response } from "express";
import { ProductoService } from "../services/producto.service";
import { ArchivoService } from "../services/archivo.service";

export class ProductoController {
  private productoServicio: ProductoService;
  private archivoServicio: ArchivoService;

  constructor() {
    this.productoServicio = new ProductoService();
    this.archivoServicio = new ArchivoService();

  }

  crearProducto = (req: Request, res: Response) => {
    const nombreArchivo = req.file?.filename;
    this.archivoServicio.guardarImagenEnDB(nombreArchivo);
    const pathImg = "http://localhost:3000/img/" + nombreArchivo ;
    this.productoServicio.crearProducto(req, pathImg)
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
