function calculatePoints(amount) {
    let points = 0;

    if (amount > 100) {
        // 超过100美元的部分
        points += 2 * (amount - 100);
        // 计算50到100美元之间的部分
        points += 1 * (100 - 50);
    } else if (amount > 50) {
        // 仅计算50到100美元之间的部分
        points += 1 * (amount - 50);
    }

    return points;
}
module.exports = {calculatePoints}