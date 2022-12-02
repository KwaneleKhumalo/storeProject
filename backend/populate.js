require('dotenv').config();

const connectToDb = require('./db/connect');

const ProductModel = require('./models/productsModel');

const jsonProducts = require('./products.json');


const startServer = async () => {
    try {
        await connectToDb(process.env.MONGO_URI);
        await ProductModel.deleteMany();
        await ProductModel.create(jsonProducts);
        console.log('successfully connected from populate');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

startServer();