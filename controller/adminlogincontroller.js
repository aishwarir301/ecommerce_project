const adminmodel = require('../model/adminmodel')
const bcrypt = require('bcrypt')
exports.adminregister = async (req, res) => {
    const realPassword = req.body.password;
    req.body.password = await bcrypt.hash(realPassword, 10);
    var select = await adminmodel.find({ 'email': req.body.email })
    if (select.length === 0) {
        const data = await adminmodel.create(req.body);
        res.status(200).json({
            status: "successfully register.",
            data,
        });
    }
    else {
        res.status(200).json({
            status: "you are allready register",
        });
    }
}
exports.adminlogin = async (req, res) => {
    const realPassword = req.body.password;
    req.body.password = await bcrypt.hash(realPassword, 10);

    var select = await adminmodel.find({ 'email': req.body.email })
    if (select.length === 0) {
        const data = await adminmodel.create(req.body);
        res.status(200).json({
            status: "successfully register.",
            data,
        });
    }
    else {
        res.status(200).json({
            status: "you are allready register",
        });
    }
}
// exports.loginUser = async (req, res) => {
//     try {
//         const check = await userModel.findOne({ email: req.body.email });
//         if (!check) {
//             return res.status(200).json({
//                 status: "admin allReady login",
//             });
//         } else {
//             const data = await userModel.find({ email: req.body.email });
//             if (data.length == 1) {
//                 bcrypt.compare(req.body.password, data[0].password);
//                 const token = jwt.sign({ id: data[0].id }, "pin");
//                 return res.status(200).json({
//                     status: "you login successfully",
//                     token,
//                 });
//             } else {
//                 return res.status(200).json({
//                     status: "check your email and pass",
//                 });
//             }
//         }
//     }catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             message: "Internal server error.",
//             data: error,
//         });
//     }
// };