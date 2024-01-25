const jwt = require("jsonwebtoken")
require("dotenv").config();
 
//Fonction qui vérifie que le JWT_KEY correspond à celui dans le process.env
exports.verifyToken = (request, response, next) => {
    //Le token ici requiert la présence de son authorization et de la sa clé comme valeur
    const token = request.headers.authorization
   
    if (!token) {
        return response.status(401).json({ message: "Token non fourni" });
    }
    //Tente de comparer grâce a la function verify si la clé JWT est présente dans l'environnement
    try {
    jwt.verify(token, process.env.JWT_KEY)
    //Si la clé est valide, passe a la suite
    next(); 
    }catch(error){
        response.status(503).json({message: "TOKEN INVALID"})
 
    };
 
};