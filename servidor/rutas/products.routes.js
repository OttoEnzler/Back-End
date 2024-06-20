const ProductController = require('../controladores/products.controller');

module.exports = (app) => {
    app.get('/products', ProductController.findAllProducts);
    app.get('/products/:id', ProductController.findOneProduct);
    app.post('/products/new', ProductController.createProduct);
    app.put('/products/update/:id', ProductController.updateProduct);
    app.delete('/products/delete/:id', ProductController.deleteProduct);
}