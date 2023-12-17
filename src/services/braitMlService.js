const {Storage} = require("@google-cloud/storage")
const gcpCredential = JSON.parse(process.env.CREDENTIALS_KEY_JSON)
const { v4: uuidv4 } = require('uuid');
const axios = require("axios")
const braitMlApiPath = process.env.BASE_PATH_BRAIT_MODEL_ML

module.exports = {
   async uploadImageBraille(image,userId) {
       try {
           if (!['image/jpeg', 'image/png'].includes(image.mimetype)) {
               throw new Error('Invalid file type. Only JPEG and PNG images are allowed.');
           }

           const storageClient = new Storage({
                credentials:gcpCredential
           });

           const bucket = storageClient.bucket('brait-bucket');

           let fileExtension = image.mimetype === 'image/jpeg' ? 'jpeg' : 'png';
           let imageName = `image-${userId}-${uuidv4()}.${fileExtension}`;

           const blob = await bucket.file(imageName);
           const blobStream = await blob.createWriteStream();
           const imageUrl = await new Promise((resolve, reject) => {
               blobStream.on('error', (err) => {
                   reject(err);
               });

               blobStream.on('finish', async () => {
                   let imageUrl =
                   resolve(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
               });

               blobStream.end(image.buffer);
           })

           return imageUrl

       }catch (error) {

       }
    },
   async predictImageBraille(imageUrl){
       try {
           let responseBraitPrediction = await axios.post(`${braitMlApiPath}/brait/prediction`,{
               imagePath:imageUrl
           },{
               headers:{
                   "Content-Type":"application/json"
               }
           })
           console.log(responseBraitPrediction.data)
           return responseBraitPrediction.data.data.text
       }catch (error) {

       }
    }
}