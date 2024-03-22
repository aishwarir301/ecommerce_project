const catagerymodel = require('../model/catagorymodel')
exports.catagaryadd = async(req,res)=>{
    req.body.image=req.file.originalname
    var data = await catagerymodel.create(req.body)
    console.log(data)
    res.status(200).json({
        status:"inserted",
        data,
    })
}
