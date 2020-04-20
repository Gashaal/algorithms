// в начале у нас ничего нет и нам нужно купить
// нужно искать valley and peak

function maxProfit(prices) {
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            max += prices[i] - prices[i - 1];
        }
    }

    return max;
}

module.exports = maxProfit;
