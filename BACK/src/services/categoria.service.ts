import { Categoria } from '../entities/Categoria';
import fs from 'fs';

export class CategoriaService {

    getCategorias = () => {
        return Categoria.find()
            .then((categorias) => {
                const promesasImagenes = categorias.map((categoria) => {
                    const descripcion = categoria.descripcion;
                    const imagenPath = `src/assets/categorias/${categoria.imagen}`;

                    return new Promise((resolve, reject) => {
                        fs.readFile(imagenPath, { encoding: 'base64' }, (error, data) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve({ descripcion, imagenBase64: data });
                            }
                        });
                    });
                });

                return Promise.all(promesasImagenes);
            })
            .catch((error) => {
                console.error('Error al obtener las categorias:', error);
                return [];
            });
    }
    
}