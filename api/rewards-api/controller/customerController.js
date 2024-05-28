const customerService = require('../service/customerService');

exports.getAllUsers = (req, res) => {
    const users = customerService.getAllUsers();
    
    res.send(users);
};

exports.updateRewardsById = (req, res) => {
    const newUser = req.body;

    res.send(customerService.updateRewardsById(newUser))
};
exports.calculateRewards = (req, res) => {

    res.send(customerService.calculateRewards())
}; 