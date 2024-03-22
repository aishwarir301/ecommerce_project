const productmodel = require('../model/productmodel')
exports.productadd = async (req, res) => {
    req.body.image = req.file.originalname
    var data = await productmodel.create(req.body)
    console.log(data)
    res.status(200).json({
        status: "product inserted",
        data,
    })
}
exports.viewproduct = async (req, res) => {
    var data = await productmodel.find()
    console.log(data)
    res.status(200).json({
        status: "product views",
        data,
    })
}
exports.viewoneproduct = async (req, res) => {
    const id = req.params.id
    var data = await productmodel.findById(id)
    console.log(data)
    res.status(200).json({
        status: "one product views",
        data,
    })  
}
exports.updateproduct = async (req, res) => {
    var id = req.params.id
    var data = await productmodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status: "product update",
        data,
    })
}
exports.deleteproduct = async (req, res) => {
    var id = req.params.id
    var data = await productmodel.findByIdAndDelete(id)
    res.status(200).json({
        status: "product delete",
        data,
    })
}