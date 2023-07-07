import { Marca } from '../entities/Marca';
import fs from 'fs';

export class MarcaService {

    getMarcas = () => {
        return Marca.find()
            .then((marcas) => {
                const promesasImagenes = marcas.map((marca) => {
                    const descripcion = marca.descripcion;
                    const imagenPath = `src/assets/marcas/${marca.imagen}`;

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
                console.error('Error al obtener las marcas:', error);
                return [];
            });
    }
}