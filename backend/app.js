require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const port = 3000;
const connectToDb = require('./db/connect');
const handlingError = require('./middleware/error-handler');
const pageNotFound = require('./middleware/not-found');
const productRouter = require('./routes/productRoutes');

// Middleware & Error Handling

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Store API <a href="/api/v1/products">Products</a>');
});

app.use('/api/v1/products', productRouter)


const startServer = async () => {
    try {
        await connectToDb(process.env.MONGO_URI)
        app.listen(port, () => {console.log('listening')});
    } catch (error) {
        console.log(error);
    }
}

app.use(handlingError);
app.use(pageNotFound);
startServer();