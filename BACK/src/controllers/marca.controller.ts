import { Request, Response } from "express";
import { MarcaService } from "../services/marca.service";

export class MarcaController {
    
  private marcaService: MarcaService;

  constructor() {
    this.marcaService = new MarcaService();
  }

  getMarcas = (req: Request, res: Response) => {
    this.marcaService.getMarcas()
      .then(marcas => {
        res.send(marcas);
      })
      .catch(e => {
        res.status(500);
        res.send({ error: e });
      });
  }

}