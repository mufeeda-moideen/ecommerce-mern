const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./router/productRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);


const PORT = 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

//import Connection
const connection = require("./connections/connection");
connection();