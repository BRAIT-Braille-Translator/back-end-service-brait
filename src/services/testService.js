module.exports = {
    async helloworld(){
        try {
            return 'Hello dunia'
        }catch (e) {
            throw new Error('Internal Server Error');
        }
    },
}