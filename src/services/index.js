exports.getHelloWord = async () => {
    try {
        return 'Hello Word'
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
}