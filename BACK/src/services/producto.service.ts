import { Producto } from '../entities/Producto';
import fs from 'fs';

export class ProductoService{

    getProductos = () => {
        const productos = Producto.find();
        return productos;
    }

    crearProducto = (req: any) => {
        const {imagen, nombre, descripcion, precio, clasificacion, marca} = req.body;

        const imageData = Buffer.from(imagen, 'base64');
        const filename = Math.random().toString(36).substring(2, 8) + '.jpg';
        const directory = 'src/assets/productos/';

        fs.writeFileSync(directory + filename, imageData);

        const producto = new Producto();
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.clasificacion = clasificacion;
        producto.marca = marca;
        producto.imagen = directory + filename;

        return producto.save();
    }

    getProductoId = (id: number) => {
      const producto = Producto.findOneBy({id: id});
      return producto;
    }

}
