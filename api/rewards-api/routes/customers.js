var express = require('express');
var router = express.Router();

const customerController = require('../controller/customerController');
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', customerController.getAllUsers);
router.post('/update_rewards', customerController.updateRewardsById);
router.get('/get_all_rewards', customerController.calculateRewards);
module.exports = router;
