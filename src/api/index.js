const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path'); 
const routes = require('./src/routes/index');


// middlewares
app.use(cors());  // REGLAS 
app.use(express.json()); // TRANSFORMAR JSON
app.use(express.urlencoded({extended: false}));

//routes
app.use('/docs', routes)


const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Ejecutando server en el puerto: ${PORT}`);
});
