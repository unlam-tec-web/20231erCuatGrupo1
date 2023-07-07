import { Request, Response } from "express";

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const poolData = {
    UserPoolId: "us-east-2_Jf3tqSJwI",
    ClientId: "17qmfe925dahu6b1gf0br0lg27"
};

export class UsuarioController {

    registrarUsuario = (req: Request, res: Response) => {
        let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        const { nombre, apellido, direccion, email, password } = req.body;

        let attributeList: any[] = [];
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "name", Value: nombre }));
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "family_name", Value: apellido }));
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "address", Value: direccion }));
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));

        /* Validaciones
        if (typeof nombre !== 'string' || typeof apellido !== 'string' || typeof direccion !== 'string') {
            return res.status(400).json({ message: 'Error al procesar la solicitud' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Error al procesar la solicitud' });
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{13,}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: 'Error al procesar la solicitud' });
        }
        Fin validaciones */

        const signUpPromise = () => {
            return new Promise((resolve, reject) => {
                userPool.signUp(email, password, attributeList, [], function (err: any, result: any) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        };

        signUpPromise()
            .then((result: any) => {
                let cognitoUser = result.user;
                res.status(200).json({ message: cognitoUser.getUsername() + ' fue registrado exitosamente' });
            })
            .catch((error: any) => {
                if (error.code == 'UsernameExistsException') {
                    res.status(500).json({ message: 'Ya existe un usuario con ese correo' });
                }
                res.status(500).json({ message: 'Lo sentimos, no hemos podido procesar tu solicitud. Intentelo de nuevo' });
            });
    }

    autenticarUsuario = (req: Request, res: Response) => {
        let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        const { email, password } = req.body;

        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: email,
            Password: password
        });

        var userData = {
            Username: email,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        const authenticateUser = (authenticationDetails: any) => {
            return new Promise((resolve, reject) => {
                cognitoUser.authenticateUser(authenticationDetails, {
                    onSuccess: function (result: any) {
                        let cognitoUser = result.user;
                        console.log('username: ' + cognitoUser.getUsername() + ' autentificado');
                        resolve(result);
                    },
                    onFailure: function (err: any) {
                        console.log(err);
                        reject(err);
                    }
                });
            });
        };

        authenticateUser(authenticationDetails)
            .then((result: any) => {
                let cognitoUser = result.user;
                res.status(200).json({ message: cognitoUser.getUsername() + ' ha iniciado sesion correctamente' });
            })
            .catch((err: any) => {
                res.status(500).json({ message: 'Lo sentimos, las credenciales no son validas' });
            });
    }

    verificarCodigo = (req: Request, res: Response) => {
        let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        const { email, codigo } = req.body;

        var userData = {
            Username: email,
            Pool: userPool
        };

        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        const confirmRegistrationPromise = (cognitoUser: any, codigo: string) => {
            return new Promise((resolve, reject) => {
                cognitoUser.confirmRegistration(codigo, true, function (err: any, result: any) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        };

        confirmRegistrationPromise(cognitoUser, codigo)
            .then((result: any) => {
                let cognitoUser = result.user;
                res.status(200).json({ message: cognitoUser.getUsername() + ' fue verificado exitosamente!' });
            })
            .catch((err: any) => {
                if (err.code === 'CodeExpiredException') {
                    res.status(400).json({ message: 'El código de verificación ha expirado.' });
                } else {
                    res.status(500).json({ message: 'No hemos podido verificar tu cuenta. Correo o código inválido' });
                    console.log(err.code)
                }
            });
    }

}