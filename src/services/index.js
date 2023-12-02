exports.getHelloWord = async () => {
    try {
        return 'Hello dunia'
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
}