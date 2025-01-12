const Product = require("../modelos/products.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json({ product: deletedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}