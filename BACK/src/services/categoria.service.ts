import { Categoria } from '../entities/Categoria';

export class CategoriaService{

    getCategorias = async(req: any) => {
        const categorias = await Categoria.find();
        return categorias;
    }
    
}