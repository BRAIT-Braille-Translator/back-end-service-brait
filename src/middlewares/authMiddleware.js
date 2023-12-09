const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const utils = require("../utils")
module.exports = {
      async checkDuplicateUser(req,res,next){
        try {
            let data = req.body
            let user  =  await prisma.user.count({
                where:{
                    email:data.email
                }
            })
            if (user !== 0){
                res.status(400).json(utils.responseTemplate.successResponse(
                    false,
                    "Email is already taken!",
                ))
                return
            }

            next()

        }catch (error) {
            res.status(500).json(utils.responseTemplate.errorResponse(
                false,
                `${error}`,
            ));
        }
    }
}