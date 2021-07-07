const  Product = require('../models/collection');
const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
    try {

    const products = await Product.find();
        return res.send(products);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});



   router.get('/:id', async (req, res) => {
    try {
   
    const product = await Product.findById(req.params.id);

    if (!product)
    return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);

    return res.send(product);

    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
   




router.post('/', async (req, res) => {
    try {
    
   
    const product = new Product({
    name: req.body.name,
    description: req.body.description,

});
    await product.save();

    return res.send(product);

    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
   



   router.put('/:id', async (req, res) => {
    try {

    const product = await Product.findByIdAndUpdate(
        req.params.id,
    {
    name: req.body.name,
    description: req.body.description,

},
        { new: true }
    );

    if (!product)
        return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);
    await product.save();

    return res.send(product);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
   });


module.exports = router;