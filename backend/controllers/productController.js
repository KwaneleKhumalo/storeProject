const ProductModel = require('../models/productsModel')

const getAllProductsStatic = async (req, res) => {
    const products = await ProductModel.find({});
    res.status(200).json({products, nbHits: products.length})
};

const getAllProducts = async (req, res) => {
    const products = await ProductModel.find(req.query);
    res.status(200).json({products, nbHits: products.length})
};


module.exports = {getAllProducts, getAllProductsStatic}