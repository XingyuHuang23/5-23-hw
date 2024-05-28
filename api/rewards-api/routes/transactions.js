var express = require('express');
var router = express.Router();

const transactionController = require('../controller/transactionController');

router.get('/', transactionController.getAllRecords);
router.get('/get_all_records', transactionController.getAllRecords);
module.exports = router;