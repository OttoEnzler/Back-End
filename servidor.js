const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require('./servidor/configuracion/mongoose.config');
require('./servidor/rutas/products.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});