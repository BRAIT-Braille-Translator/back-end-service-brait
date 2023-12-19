const {PrismaClient}  = require("@prisma/client")
const prisma = new PrismaClient()
const {Storage} = require("@google-cloud/storage")
const decodeCREDENTIALS_KEY_JSON =Buffer.from(process.env.CREDENTIALS_KEY_JSON,'base64')
const gcpCredential =  JSON.parse(decodeCREDENTIALS_KEY_JSON.toString('utf-8'))
const { v4: uuidv4 } = require('uuid');


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
    },


    async uploadUserProfileImage(userId,image){
      try {
          if (!['image/jpeg', 'image/png'].includes(image.mimetype)) {
              throw new Error('Invalid file type. Only JPEG and PNG images are allowed.');
          }

          const storageClient = new Storage({
              credentials:gcpCredential
          });


          const bucket = storageClient.bucket('brait-bucket');
          const folderName = "user"

          let fileExtension = image.mimetype === 'image/jpeg' ? 'jpeg' : 'png';
          let imageName = `${folderName}/profil-image-${userId}-${uuidv4()}.${fileExtension}`;

          console.log(imageName)

          const blob = await bucket.file(imageName);
          const blobStream = await blob.createWriteStream();
          const imageUrl = await new Promise((resolve, reject) => {
              blobStream.on('error', (err) => {
                  reject(err);
              });

              blobStream.on('finish', async () => {
                      resolve(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
              });

              blobStream.end(image.buffer);
          })

          return imageUrl
      }  catch (error) {

      }
    },

    async updateImageProfileUrl(idUser,imageProfileUrl){
        try {

            let user = await prisma.user.update({
                where:{
                    id:idUser
                },
                data:{
                    profil_image:imageProfileUrl
                },
                select: {
                    username: true,
                    email: true,
                    profil_image:true
                },
            })

            return user
        }catch (error){
            console.log(error)
        }
    }

}