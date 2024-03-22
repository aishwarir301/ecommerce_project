const usermodel = require('../model/usermodel')
const bcrypt = require('bcrypt')
const storage = require('node-persist')
exports.userregister = async (req, res) => {
    const realPassword = req.body.password;
    req.body.password = await bcrypt.hash(realPassword, 10);
    var select = await usermodel.find({ 'email': req.body.email })
    if (select.length === 0) {
        const data = await usermodel.create(req.body);
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
exports.login = async (req, res) => {
    const check = await usermodel.findOne({ email: req.body.email });
    if (!check) {
        return res.status(200).json({
            status: "user allReady login",
        });
    } else {
        const data = await usermodel.find({ email: req.body.email });
        if (data.length == 1) {
            await storage.init();
            await storage.setItem('userid',data[0].id);
            bcrypt.compare(req.body.password, data[0].password);
            return res.status(200).json({
                status: "you login successfully",
            });
        } else {
            return res.status(200).json({
                status: "check your email and pass",
            });
        }
    }
}