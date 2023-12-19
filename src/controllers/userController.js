const service = require("../services")
const utils = require("../utils")

module.exports = {
    async getUserData(req,res,next){
        try {

            let userData = await service.userService.getUserById(req.userId)

            res.status(200).json(utils.responseTemplate.successResponse(
                true,
                `succes get user data`,
                userData
            ))
        }catch (error) {
            res.status(500).json(utils.responseTemplate.errorResponse(
                false,
                `${error.message}`,
            ));
        }
    }
}