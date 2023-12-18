const utils = require("../utils")
module.exports = {
    async signUpFormatRequest(req,res,next){
        try {
            if (req.body.username === undefined
                ||req.body.email === undefined
                || req.body.password === undefined
            ){
                throw new Error("request is not valid")
            }

            next()
        }catch (error) {
            res.status(400).json(utils.responseTemplate.successResponse(
                false,
                error.message,
            ))
        }

    }
}