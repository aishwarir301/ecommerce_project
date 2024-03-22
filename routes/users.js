var express = require('express');
const { userviewproduct, userviewoneproduct } = require('../controller/userviewcontroller');
const { userregister, login } = require('../controller/usercontroller');
const { cartadd } = require('../controller/cartcontroller');
var router = express.Router();

/* GET users listing. */
router.get('/user_view_prodct',userviewproduct)
router.get('/user_view_one_prodct/:id',userviewoneproduct)
router.post('/userregister',userregister)
router.post('/userlogin',login  )
router.post('/cartadd',cartadd )

module.exports = router;
