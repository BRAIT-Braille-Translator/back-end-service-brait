const authMiddleware = require("./authMiddleware")
const jwtMiddleware = require("./jwtMiddleware")
const uploadMiddleware = require("./UploadMiddleware")

module.exports = {
    authMiddleware,
    jwtMiddleware,
    uploadMiddleware
}