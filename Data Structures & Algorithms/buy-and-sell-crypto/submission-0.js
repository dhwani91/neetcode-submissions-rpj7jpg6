class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currProfit, maxProfitSoFar=0,minBuyingPrice = prices[0]
        for(let i =0; i<prices.length; i++){
            minBuyingPrice = Math.min(minBuyingPrice, prices[i])
            currProfit = prices[i] - minBuyingPrice;
            maxProfitSoFar = Math.max(currProfit,maxProfitSoFar)
        }
    return maxProfitSoFar;

    }
}
