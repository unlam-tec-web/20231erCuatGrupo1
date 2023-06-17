
import { Producto } from '../entities/Producto';


export class ProductoService{


    getProductos = async(req: any) => {
        const productos = await Producto.find();
        return productos;
    }

    crearProducto = async (req: any) => {

        const {nombre, descripcion, precio, clasificacion} = req.body;

        const producto = new Producto();
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.clasificacion = clasificacion;

        await producto!.save();


        return producto;
    }

    getProductoId = async(id: number) => {
      const producto = await Producto.findOneBy({id: id});
      return producto;
    }

}
