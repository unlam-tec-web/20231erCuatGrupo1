import { Request, Response } from "express";
import { MarcaService } from "../services/marca.service";

export class MarcaController {
    
  private marcaService: MarcaService;

  constructor() {
    this.marcaService = new MarcaService();
  }

  getMarcas = async (req: Request, res: Response) => {
    try {
      const marcas = await this.marcaService.getMarcas(req);
      res.send(marcas);
    } catch (e) {
      res.status(500);
      res.send({ error: e });
    }
  }

}