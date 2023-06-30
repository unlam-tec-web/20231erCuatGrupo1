import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import ProductoRouter from './routes/producto.routes';
import CarritoRouter from './routes/carrito.routes';
import UsuarioRouter from './routes/usuario.routes';

//creacion instancia de express
const app = express();

//config middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//creacion instancias routers
const productoRouter = new ProductoRouter();
const carritoRouter = new CarritoRouter();
const usuarioRouter = new UsuarioRouter();

//Inicio de rutas
productoRouter.iniciar(express);
app.use(productoRouter.obtenerRutas());
carritoRouter.iniciar(express);
app.use(carritoRouter.obtenerRutas());
usuarioRouter.iniciar(express);
app.use(usuarioRouter.obtenerRutas());

export default app