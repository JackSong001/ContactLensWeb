const express = require('express');
const router = express.Router();
// const products = require('./models/product.mock');
const Product = require('../models/product');

const product = module.exports;

product.getProducts = function(req,res) {
    Product.find((err, docs) => {
        res.status(200).json(docs);
    });
}

product.getProduct = function(req, res) {
    const {name} = req.params;
    Product.findOne({name}, (err, doc) => {
        res.status(200).json(doc);
    })
}

product.postProducts = function(req, res, next) {
    const product = new Product( {
        name: req.body.name,
        brief: req.body.brief,
        fullPrice: req.body.fullPrice,
        dealPrice: req.body.dealPrice,
        bc: req.body.bc,
        type: req.body.type,
        packaging: req.body.packaging,
        content: req.body.content,
        brand: req.body.brand,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        img: req.body.img,
    })
    product.save().then(response => {
        res.status(200).json({message: 'product created'});
    }).catch(error => {
        console.log(error);
    })
}

// mock db
// router.get('/products', (req, res, next) => {
//     res.json(products);
// });
//
// router.get('/product/:name', (request, response) => {
//     response.json(products.find( (product) => product.name == request.params.name));
// });
// 
// export module with router
// router.get('/products',(req, res, next)=> {
//     Product.find((err, docs) => {
//         res.status(200).json(docs);
//     })
// })
// router.get('/product/:name', (req, res, next) => {
//     const {name} = req.params;
//     Product.findOne({name}, (err, doc) => {
//         res.status(200).json(doc);
//     })
// })
// 
// router.post('/saveProduct', (req, res, next) => {
//     const product = new Product( {
//         name: req.body.name,
//         brief: req.body.brief,
//         fullPrice: req.body.fullPrice,
//         dealPrice: req.body.dealPrice,
//         bc: req.body.bc,
//         type: req.body.type,
//         packaging: req.body.packaging,
//         content: req.body.content,
//         brand: req.body.brand,
//         manufacturer: req.body.manufacturer,
//         description: req.body.description,
//         img: req.body.img,
//     })
//     product.save().then(response => {
//         res.status(200).json({message: 'product created'});
//     }).catch(error => {
//         console.log(error);
//     })
// })

// module.exports = router;