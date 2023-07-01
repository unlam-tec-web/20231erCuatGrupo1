import { Request, Response } from "express";
import { UsuarioServicio } from "../services/usuario.service"

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const poolData = {    
  UserPoolId : "us-east-2_Jf3tqSJwI",     
  ClientId : "17qmfe925dahu6b1gf0br0lg27" 
}; 

export class UsuarioController {

    registrarUsuario = (req: Request, res: Response) => {
        let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        const {nombre, apellido, direccion, email, password} = req.body;

        let attributeList: any[] = [];
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name", Value: nombre}));
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"family_name", Value: apellido}));
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address", Value: direccion}));
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value: email}));

        console.log("JSON:" + JSON.stringify(req.body));
    
        userPool.signUp(email, password, attributeList, [], function(err: any, result: any){
            if (err) {
                console.log(err);
                res.json(err);
                return;
            }
            let cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            res.json({
                bienvenido: `${cognitoUser.getUsername()}`
            })
        });
    }

    autenticarUsuario = (req: Request, res: Response) => {
       
    }

    autenticarCodigo = (req: Request, res: Response) => {
       
    }

}