module.exports = {
    successResponse(success= true,message= "",data = {}){
        return {
            success,
            message,
            data
        }
    },
    errorResponse(success = false,message = "",error_code = 0, data = {}){
        return {
            success,
            message,
            error_code,
            data
        }
    }
}