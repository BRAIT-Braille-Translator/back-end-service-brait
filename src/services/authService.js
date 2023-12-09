const {PrismaClient}  = require("@prisma/client")
const bcryptjs = require("bcryptjs")
const prisma = new PrismaClient()


module.exports = {
    async signup(userData){
        try {
            const user = await prisma.user.create({
                data: {
                    username:userData.username,
                    email:userData.email,
                    password:bcryptjs.hashSync(userData.password,8),
                    profil_image:""
                }
            })
           console.log(user)
            return "success create data user"
        }catch(error) {
            throw new Error(error)
        }
    }
}