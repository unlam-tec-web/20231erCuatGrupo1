import { Request, Response } from "express";

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
    
        userPool.signUp(email, password, attributeList, [], function(err: any, result: any){
            if (err) {
                console.log(err);
                res.json(err);
                return;
            }
            let cognitoUser = result.user;
            console.log('usuario: ' + cognitoUser.getUsername() + ' registrado');
        });
    }

    autenticarUsuario = (req: Request, res: Response) => {
        let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        const {email, password} = req.body;
    
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username : email,
            Password : password
        });
      
        var userData = {
            Username : email,
            Pool : userPool
        };
    
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
          
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function(result: any) {
                let cognitoUser = result.user;
                console.log('username: ' + cognitoUser.getUsername() + ' autentificado');
            },
            onFailure: function(err: any) {
                console.log(err);
                res.json(err);
            }
        });
    }

    verificarCodigo = (req: Request, res: Response) => {
        let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        const {email, codigo} = req.body;

        var userData = {
          Username : email,
          Pool : userPool
        };
      
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        cognitoUser.confirmRegistration(codigo, true, function(err: any, result: any) {
           if (err) {
                console.log(err);
                res.json(err);
                return;
            }
            let cognitoUser = result.user;
            console.log('username: ' + cognitoUser.getUsername() + ' verificado');
        })
    }

}