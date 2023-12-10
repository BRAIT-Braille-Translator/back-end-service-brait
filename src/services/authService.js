const {PrismaClient}  = require("@prisma/client")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const prisma = new PrismaClient()
const secretKey = process.env.SECRET_KEY

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
            return "success create data user"
        }catch(error) {
            throw new Error(error)
        }
    },
    async login(userData){
        try{
            console.log(userData)
            const user = await prisma.user.findUnique({
                where:{
                    email:userData.email
                },
                select: {
                    id:true,
                    email: true,
                    username:true,
                    password:true
                },
            })


            if (!user){
                throw new Error("User not found")
            }

            let passwordIsValid = bcryptjs.compareSync(userData.password, user.password)
            if (!passwordIsValid){
                throw new Error("Invalid Password!")
            }

            let token = 'Bearer ' + jwt.sign({
                id:user.id,
                username:user.username,
                email:user.email

            },secretKey,{
                expiresIn: 86400
            })

            return token

        }catch (error) {
            throw new Error(error)
        }
    }
}