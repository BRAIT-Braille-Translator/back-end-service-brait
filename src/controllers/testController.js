const service = require("../services");
const utils = require("../utils")
module.exports = {
    async getHelloWorld (req,res){
        try {
            let word  = await service.testService.helloworld()

            let data = {
                user:word
            }

            //throw new Error("failed to get string Hello World")

            res.status(404).json(utils.responseTemplate.successResponse(
                true,
                gcpCredential,
            ))
        } catch (error) {
            res.status(500).json(utils.responseTemplate.errorResponse(
                false,
                `${error}`,
            ));
        }
    }
}
