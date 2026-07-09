const express = require('express');
const router = express.Router();

// Simulated Database Data
let products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 }
];
let nextId = 3;

// 1. GET - RENDER THE WEB PAGE WITH DATA
router.get('/', (req, res) => {
    // Passes the products array to views/products.ejs
    res.render('products', { products: products });
});

// 2. POST - CREATE A NEW PRODUCT
router.post('/', (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: nextId++,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// 3. PUT - UPDATE AN EXISTING PRODUCT BY ID
router.put('/:id', (req, res) => {
    const targetId = parseInt(req.params.id);
    const { name, price } = req.body;
    
    const product = products.find(p => p.id === targetId);
    
    if (product) {
        product.name = name;
        product.price = price;
        res.json({ message: "Updated successfully" });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// 4. DELETE - REMOVE A PRODUCT BY ID
router.delete('/:id', (req, res) => {
    const targetId = parseInt(req.params.id);
    products = products.filter(p => p.id !== targetId);
    res.json({ message: "Deleted successfully" });
});

module.exports = router;