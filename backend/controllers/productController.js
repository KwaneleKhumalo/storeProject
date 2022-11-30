const getAllProductsStatic = async (req, res) => {
    throw new Error('Testing async errors');
    res.status(200).json({msg: 'Testing Products'})
};

const getAllProducts = async (req, res) => {
    res.status(200).json({msg: 'All Products'})
};


module.exports = {getAllProducts, getAllProductsStatic}