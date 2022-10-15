const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password:'ROOT',
    database: 'pruebareact'
});

const getDocumentQuery = async () => {
    console.log('entre consulta')
    
    const text = ('select * from documentos')
    const resp = await pool.query(text);
    return resp.rows;
}

const createDocumentsQuery = async (info) => {
    try {
    console.log('entre create',info)
        const text = (`INSERT INTO documentos(titulo,area,sede,n1,n2,n3,anio,fechaVencimiento, observaciones, enlace) VALUES('${info.titulo}','${info.area}','${info.sede}','${info.N1}','${info.N2}','${info.N3}','${info.anio}','${info.fechaVencimiento}','${info.observaciones}','${info.enlace}')`)
        const resp = await pool.query(text);
        return await resp;
    } catch (error) {
        console.log(error)
    }
}

module.exports= {
    getDocumentQuery,
    createDocumentsQuery
}