import { Imagen } from "../entities/Imagen";
import { extname } from "path";

const multer  = require('multer')


export class ArchivoService{

    private MIMETYPES = ["image/jpeg", "image/png", "image/jpg"];
    private path = "/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img";

    storage = () => {
        return multer({ 
            storage: multer.diskStorage({
                destination: this.path,
                filename: (req: any, file: any, cb: any) => {
                    const fileExtension = extname(file.originalname);
                    const fileName = file.originalname.split(fileExtension)[0];
        
                    cb(null,`${fileName}-${Date.now()}${fileExtension}`);

                }
            }),
            fileFilter: (req: any, file: any, cb: any) => {
                if(this.MIMETYPES.includes(file.mimetype)) cb(null,true)
                else cb(new Error(`Solo se permiten ${this.MIMETYPES.join(" ")}`))
            },
            limits: {
                fieldSize: 100000000,
            },
        });

    }

guardarImagenEnDB = (nombreArchivo: any): Promise<Imagen> => {
  return new Promise<Imagen>((resolve, reject) => {
    const imagen = new Imagen();
    const fechaCarga = new Date();

    imagen.nombre = nombreArchivo;
    imagen.ubicacion = this.path;
    imagen.fecha_carga = fechaCarga;
    imagen.isEliminado = false;

    imagen.save()
      .then(savedImagen => {
        resolve(savedImagen);
      })
      .catch(error => {
        reject(error);
      });
  });
};

















    
}