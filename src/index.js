const express = require("express")
const app = express()

app.use(express.json())
let products = {}

//DISPLAYING ALL PRODUCTS FOR A MERCHANT
app.get("/merchant/:merchantId/products", (req, res) => {
    const merchantId = req.params.merchantId
    res.status(200).json(products[merchantId] || [])
})

//CREATING A PRODUCT FOR A MERCHANT
app.post("/merchant/:merchantId/products", (req, res) => {
    const merchantId = req.params.merchantId
    const productInfo = req.body
    if(!products[merchantId]) {
        products[merchantId] = [];
    }
    products[merchantId].push(productInfo)
    res.status(200).json({
        success: true,
        status: "OK",
        message: "A New Product has been successfully created",
        products: productInfo
    })
})

//EDIT AN EXISTING PRODUCT
app.put("/merchant/:merchantId/products/:skuId", (req, res) => {
    const merchantId = req.params.merchantId
    const productId = req.params.skuId
    const updatedInfo = req.body
    const productIndex = products[merchantId]?.findIndex(p => p.skuId === skuId);
    if (productIndex === undefined || productIndex < 0) {
        return res.status(404).send('Product not found.');
    }

    products[merchantId][productIndex] = { ...updatedProduct, dateAdded: products[merchantId][productIndex].dateAdded };
    res.send(updatedProduct);
})

//DELETE AN EXISTING PRODUCT
app.delete('/merchant/:merchantId/products/:skuId', (req, res) => {
    const merchantId = req.params.merchantId;
    const skuId = req.params.skuId;
    const productIndex = products[merchantId]?.findIndex(p => p.skuId === skuId);
    if (productIndex === undefined || productIndex < 0) {
        return res.status(404).send('Product not found.');
    }

    products[merchantId].splice(productIndex, 1);
    res.status(204).send();
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}`);
})