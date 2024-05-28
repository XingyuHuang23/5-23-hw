const transactionService = require('../service/transactionService');

exports.getAllRecords = (req, res) => {
    res.send( transactionService.getAllRecords());
};