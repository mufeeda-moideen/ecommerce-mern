const product = require("../models/product");

//for Product Route
exports.product = async (req, res) => {
  try {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const deliveryDate = req.body.deliveryDate;
    const replacementDate = req.body.replacementDate;

    const productData = {
      name,
      price,
      description,
      deliveryDate,
      replacementDate,
    };

    const add = await product.create(productData); //create a data
    res.status(200).json({
      message : `${add.name} is Added Successfully✅ `
    })
  } catch (err) {
    console.log(err)
  }
};

//for get Products
exports.fetchProduct = async (req, res) => {
  try{
    const fetchProducts = await product.find({});
    return res.status(200).json({
      message : "Data Fetched....",
      fetchProducts
    })
  } catch(err){
    return res.status(404).json({message : "Something went wrong..."})
  }
}

//for product view
exports.productView = async (req, res) => {
  try{
    const { id } = req.params;
    // console.log(id)
    const fetch = await product.findById({ _id : id });
    return res.status(200).json(fetch);
  } catch(err){
    return res.status(404).json({ message : "Server Error"});
  }
}



