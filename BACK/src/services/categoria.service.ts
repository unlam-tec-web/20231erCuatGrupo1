import { Categoria } from '../entities/Categoria';

export class CategoriaService{

    getCategorias = () => {
        const categorias = Categoria.find();
        return categorias;
    }
    
}