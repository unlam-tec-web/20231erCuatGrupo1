import { Marca } from '../entities/Marca';

export class MarcaService{

    getMarcas = async(req: any) => {
        const marcas = await Marca.find();
        return marcas;
    }

}