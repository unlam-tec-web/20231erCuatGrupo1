import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";

export class CategoriaController {
    
  private categoriaService: CategoriaService;

  constructor() {
    this.categoriaService = new CategoriaService();
  }

  getCategorias = (req: Request, res: Response) => {
    this.categoriaService.getCategorias(req)
      .then(categorias => {
        res.send(categorias);
      })
      .catch(e => {
        res.status(500);
        res.send({ error: e });
      });
  }

}