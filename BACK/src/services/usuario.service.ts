const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const poolData = {    
  UserPoolId : "us-east-2_Jf3tqSJwI",     
  ClientId : "4m9u9um9qlbpniuj08cu6slaho" 
}; 

export class UsuarioServicio {

  registrarUsuario = (req: any) => {
    let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const {nombre, apellido, direccion, email, password} = req.body;

    let attributeList: any[] = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name", Value: nombre}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"family_name", Value: apellido}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address", Value: direccion}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email", Value: email}));

    return new Promise((resolve, reject) => {
      userPool.signUp(email, password, attributeList, null, (err : any) => {
        if (err) {
          reject({
            mensaje: "No se pudo registrar el usuario"
          });
        } else {
          resolve({
            mensaje: "Usuario registrado con éxito"
          });
        }
      });
    });
  }

  autenticarUsuario = (req: any) => {
    let userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const {email, password} = req.body;

    return new Promise((resolve, reject) => {

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
        onSuccess: (result : any) => {
          resolve(result);
        },
        onFailure: (err : any) => {
          reject(err);
        }
      });
    });
  }

}