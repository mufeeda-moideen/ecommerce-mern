const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./router/productRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

const MONGO_URI = 'mongodb://localhost:27017/ecommerce';
mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB error:' , err));

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
