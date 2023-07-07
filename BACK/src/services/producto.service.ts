import { Producto } from '../entities/Producto';
import * as fs from 'fs';
import * as path from 'path';


export class ProductoService{

    getProductos = () => {
        const productos = Producto.find();
        return productos;
    }

    crearProducto = (req: any) => {
        const {imagen, nombre, descripcion, precio, clasificacion, marca} = req.body;

        const producto = new Producto();
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.clasificacion = clasificacion;
        producto.marca = marca;
        producto.imagen = '';

        let saveProductPromise = producto.save(); // Promesa para guardar el producto

        if (imagen) {
            const imagePath = path.join(__dirname, 'src/assets/productos');
            const imageFileName= `${Date.now()}_${imagen.originalname}`;
            const imageFilePath= path.join(imagePath, imageFileName);

            // Promesa para guardar la imagen en el sistema de archivos
            let saveImagePromise = new Promise<string>((resolve, reject) => {
                fs.mkdir(imagePath, { recursive: true }, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        fs.writeFile(imageFilePath, imagen.buffer, (error) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(`src/assets/productos/${imageFileName}`);
                            }
                        });
                    }
                });
            });
            // Actualizar la ruta de la imagen después de guardarla
            saveProductPromise = saveProductPromise.then(() => {
                return saveImagePromise;
            }).then((imagePath) => {
                producto.imagen = imagePath;
                return producto.save();
            }).catch((error) => {
                console.error('Error al guardar la imagen:', error);
                return producto.save(); // Si ocurre un error, guardar el producto sin la ruta de la imagen
            });
        }

        return saveProductPromise;
    }

    getProductoId = (id: number) => {
      const producto = Producto.findOneBy({id: id});
      return producto;
    }

}
