import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import ProductoRouter from './routes/producto.routes';
import CarritoRouter from './routes/carrito.routes';



//creacion instancia de express
const app = express();

//config middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


//creacion instancias routers
const productoRouter = new ProductoRouter();
const carritoRouter = new CarritoRouter();



//Inicio de rutas
productoRouter.iniciar(express);
app.use(productoRouter.obtenerRutas());
carritoRouter.iniciar(express);
app.use(carritoRouter.obtenerRutas());

export default app