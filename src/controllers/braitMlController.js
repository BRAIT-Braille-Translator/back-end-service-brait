const service = require("../services")
const utils = require("../utils")

module.exports = {
    async predictImageBraille(req,res){
        try {
           let image_file = req.file
            console.log(image_file)
            let userId = req.userId
            let imageBucketUrl = await service.braitMlService.uploadImageBraille(image_file,userId)

            res.status(200).json(utils.responseTemplate.successResponse(
                true,
                "succes translate Braille image",
                {
                    urlImage:imageBucketUrl
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