
const { users,transactions } = require("../datas");
const {calculatePoints} = require("../util")
exports.getAllUsers = () => {
        return users;
};

exports.updateRewardsById = ({id,rewards}) => {
     const user = users.find(u => u.id === id);
    
     if (!user) {
         return 'User not found';
     }
     
     user.rewards = rewards;
     
    return user;
};

exports.getRewardsById = ({id,rewards}) => {
    const user = users.find(u => u.id === id);
   
    if (!user) {
        return 'User not found';
    }
    
    user.rewards = rewards;
    
   return user;
};

exports.calculateRewards = () =>{
  const rewards = {};

  transactions.forEach(transaction => {
    const { customerId, date, amount } = transaction;
    const points = calculatePoints(amount);

    const [year, month] = date.split('-').map(Number); //聪明用法

    if (!rewards[customerId]) {
      rewards[customerId] = { total: 0, monthly: {} };
    }

    const monthKey = `${year}-${month}`;

    if (!rewards[customerId].monthly[monthKey]) {
      rewards[customerId].monthly[monthKey] = 0;
    }

    rewards[customerId].monthly[monthKey] += points;
    rewards[customerId].total += points;
  });

  return rewards;
}