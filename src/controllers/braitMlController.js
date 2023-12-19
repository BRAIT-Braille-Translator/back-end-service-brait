const service = require("../services")
const utils = require("../utils")

module.exports = {
    async predictImageBraille(req,res){
        try {
           let imageFile = req.file
            let userId = req.userId
            let imageBucketUrl = await service.braitMlService.uploadImageBraille(imageFile,userId)
            let textPrediction = await  service.braitMlService.predictImageBraille(imageBucketUrl)

            res.status(200).json(utils.responseTemplate.successResponse(
                true,
                "succes translate Braille image",
                {
                    text:textPrediction
                }
            ))
        }catch (error){
            res.status(500).json(utils.responseTemplate.errorResponse(
                false,
                `${error}`,
            ));
        }
    }
}