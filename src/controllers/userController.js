const service = require("../services")
const utils = require("../utils")

module.exports = {
    async getUserData(req,res){
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
    },

    async updateUserProfileImage(req,res){
        try {
            let imageFile = req.file
            let userId = req.userId

            let imageProfileUrl = await service.userService.uploadUserProfileImage(userId,imageFile)

            let updateUserImageProfile = await service.userService.updateImageProfileUrl(userId,imageProfileUrl)

            res.status(200).json(utils.responseTemplate.successResponse(
                true,
                `succes update user image profile `,
                updateUserImageProfile
            ))
        }catch (error) {
            res.status(500).json(utils.responseTemplate.errorResponse(
                false,
                `${error.message}`,
            ));
        }
    }
}