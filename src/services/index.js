exports.getHelloWord = async () => {
    try {
        return 'Hello Ar'
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
}