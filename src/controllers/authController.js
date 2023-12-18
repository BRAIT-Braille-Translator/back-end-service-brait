const service = require('../services')
const utils = require("../utils")

module.exports = {
    async signup(req,res,next){
        try {
            let request = req.body

            let user = await service.authService.signup(request)

            res.status(200).json(utils.responseTemplate.successResponse(
                true,
                `${user}`,
            ))

        }catch (error){
            res.status(500).json(utils.responseTemplate.errorResponse(
                false,
                `${error.message}`,
            ));
        }
    },
    async login(req,res,next){
        try {

            let request = req.body
            let accessToken = await service.authService.login(request)

            res.status(200).json(utils.responseTemplate.successResponse(
                true,
                "login success",
                {
                    accessToken:accessToken
                }
            ))
        }catch (error) {
            res.status(500).json(utils.responseTemplate.errorResponse(
                false,
                `${error.message}`,
            ));
        }
    }
}