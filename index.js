const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://stevensuddreth:panthers2024@backenddb.szffjss.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB!')).catch(() => console.log('Connection failed!'));

app.get('/', (req, res) => {
    res.send('Hello from Node API server');
});

app.get('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});