exports.getHelloWord = async () => {
    try {
        return 'Hello semeton'
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
}