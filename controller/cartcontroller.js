const cartmodel = require('../model/cartmodel')
const storage = require('node-persist');
exports.cartadd = async(req,res) => {
    await storage.init();
    const productid = req.params.id;
    req.body.productid = productid;
    req.body.userid = userid;

    const data = await cartmodel.create(req.body);
    res.status(200).json({
        status:"add to cart sucessfully",
        data,
    })
}