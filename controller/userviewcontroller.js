const productmodel = require('../model/productmodel')
exports.userviewproduct = async (req, res) => {
    var data = await productmodel.find()
    console.log(data)
    res.status(200).json({
        status: "product views",
        data,
    })
}
exports.userviewoneproduct = async (req, res) => {
    const id = req.params.id
    var data = await productmodel.findById(id)
    console.log(data)
    res.status(200).json({
        status: "one product views",
        data,
    })  
}