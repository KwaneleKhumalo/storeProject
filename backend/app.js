require('dotenv');

const express = require('express');
const app = express();
const port = 3000;

// Middleware & Error Handling

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Store API <a href="/api/v1/products">Products</a>');
});

const startServer = () => {
    try {
        app.listen(port, () => {console.log('listening')});
    } catch (error) {
        console.log(error);
    }
}

startServer();