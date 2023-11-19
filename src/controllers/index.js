const service = require('../services/index')

exports.getHelloWorld = async (req, res) =>{
    try {
        let word  = await service.getHelloWord()
        res.json({
            message:word
        })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}