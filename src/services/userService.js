const {PrismaClient}  = require("@prisma/client")
const prisma = new PrismaClient()


module.exports = {
    async getUserById(idUser){
        try {
            let user = await  prisma.user.findUnique({
                where:{
                    id:idUser
                },
                select: {
                    username: true,
                    email: true,
                    profil_image:true
                },
            })

            return user
        }catch (error) {

        }
    }

}