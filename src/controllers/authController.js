const authService = require('../services')
const utils = require("../utils")
const {Prisma} = require("@prisma/client")

module.exports = {
    async signup(req,res,next){
        try {

            console.log(req.body)
            if (req.body.username === undefined
                ||req.body.email === undefined
                || req.body.password === undefined
            ){
                throw new Error("request is not valid")
            }

            let request = req.body

            let user = await authService.authService.signup(request)

            res.status(404).json(utils.responseTemplate.successResponse(
                true,
                `${user}`,
            ))

        }catch (error){
            res.status(500).json(utils.responseTemplate.errorResponse(
                false,
                `${error}`,
            ));
        }
    }
}