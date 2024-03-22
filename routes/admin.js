var express = require('express');
const { catagaryadd } = require('../controller/catagorycontroller');
var router = express.Router();
var multer = require('multer');
const { productadd, viewproduct, viewoneproduct, updateproduct, deleteproduct } = require('../controller/productcontroller');
const { adminregister } = require('../controller/adminlogincontroller');

/* GET home page. */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })
router.post('/addcatagory',upload.single('image'),catagaryadd)
router.post('/addproduct',upload.single('pimage'),productadd)
router.get('/viewproduct',viewproduct)
router.get('/view_one_product/:id',viewoneproduct)
router.post('/product_update/:id' ,updateproduct)
router.get('/product_delete/:id' ,deleteproduct)

// admin register
router.post('/admin_register',adminregister)
module.exports = router;  