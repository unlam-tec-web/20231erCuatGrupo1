import { Producto } from '../entities/Producto';
import fs from 'fs';

export class ProductoService{

    getProductos = () => {
        const productos = Producto.find();
        return productos;
    }

    crearProducto = (req: any, pathImg: string) => {
        const {nombre, descripcion, precio, clasificacion, marca} = req.body;

        const producto = new Producto();
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.clasificacion = clasificacion;
        producto.marca = marca;
        producto.imagen = pathImg;

        return producto.save();
    }

    getProductoId = (id: number) => {
      const producto = Producto.findOneBy({id: id});
      return producto;
    }

}
