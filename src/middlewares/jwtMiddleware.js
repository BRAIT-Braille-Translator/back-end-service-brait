const util = require("../utils");
const jwt = require("jsonwebtoken")
const secretKey = process.env.SECRET_KEY

module.exports = {
    async verifyToken(req, res, next){
        let tokenHeader = req.headers['x-access-token'] || "";

        if (tokenHeader.split(' ')[0] !== 'Bearer') {
            return res.status(500).send(util.responseTemplate.errorResponse(
                false,
                "Incorrect token format"
            ));
        }

        let token = tokenHeader.split(' ')[1];

        if (!token){
            return res.status(500).send(util.responseTemplate.errorResponse(
                false,
                "No token provided"
            ));
        }

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(500).send(util.responseTemplate.errorResponse(
                    false,
                    "failed verify jwt token"
                ));
            }
            req.userId = decoded.id;
            next();
        });
    }
}