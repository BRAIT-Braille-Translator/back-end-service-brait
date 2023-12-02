exports.getHelloWord = async () => {
    try {
        return 'Hello Irhan'
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
}