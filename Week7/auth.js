const jwt = require('jsonwebtoken');
const JWT_KEY = 'icode';

//authenticates token with the secret key , decoding 
function auth(req,res,next){
    const token = req.headers.token;
    const decodeinformation = jwt.verify(token,JWT_KEY);

    if(decodeinformation){
        req.userId = decodeinformation.id;
        next();
    }else{
        res.json({
            message: 'incorrect token'
        })
    }
}

//other .js files can import code from here 
module.exports = {
    auth,
    JWT_KEY
}