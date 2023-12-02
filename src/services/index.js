exports.getHelloWord = async () => {
    try {
        return 'Hello Ari'
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
}