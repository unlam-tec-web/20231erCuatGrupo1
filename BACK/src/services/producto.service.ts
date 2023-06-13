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


    eliminarProducto = async(id: number) => {        
        let mensaje = ""
        try{
            await Producto.delete(id);
            mensaje = "Producto eliminado";
            
        }catch(error){
            mensaje = "Error al eliminar producto";
        }
        return mensaje;
    }

}
