import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";

export class CategoriaController {
    
  private categoriaService: CategoriaService;

  constructor() {
    this.categoriaService = new CategoriaService();
  }

  getCategorias = async (req: Request, res: Response) => {
    try {
      const categorias = await this.categoriaService.getCategorias(req);
      res.send(categorias);
    } catch (e) {
      res.status(500);
      res.send({ error: e });
    }
  }

}