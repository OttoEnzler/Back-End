const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productos_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a la base de datos productos_db'))
.catch(err => console.error('No se pudo conectar a la base de datos productos_db', err));