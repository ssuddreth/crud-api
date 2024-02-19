const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

//Middleware
app.use(express.json());
//app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://stevensuddreth:panthers2024@backenddb.szffjss.mongodb.net/Node-API?retryWrites=true&w=majority').then(() => console.log('Connected to MongoDB!')).catch(() => console.log('Connection failed!'));

//Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API server');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});