const {Router} = require ('express');
const router = Router();
const {getDocumentQuery, createDocumentsQuery} = require('../consultasSQL/index')


router.use('/documento', async (req, res) => {
    try {
        const consulta = await getDocumentQuery();
        res.status(200).json(consulta)
    } catch (error) {
        console.log(error);
    }
})

router.post('/create', async (req, res) => {
    try {
        const info = req.body;
        // console.log(info)
        const consulta = await createDocumentsQuery(info);
        res.status(200).json('asd')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;