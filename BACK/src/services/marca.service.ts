import { Marca } from '../entities/Marca';

export class MarcaService{

    getMarcas = () => {
        const marcas = Marca.find();
        return marcas;
    }

}