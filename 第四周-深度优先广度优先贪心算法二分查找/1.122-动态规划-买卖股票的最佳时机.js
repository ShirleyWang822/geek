/**
 * 股票问题II - 买卖股票的最佳时机
 
 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 示例 1:
 
 输入: prices = [7,1,5,3,6,4]
 输出: 7
 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var maxProfit = function(prices) {
  // 动态规划
  let dp = {}
  dp[0] = {
    mi: 0,
    mo: -prices[0]
  }
  for(let i = 1; i < prices.length; i++) {
    dp[i] = {
      mi: Math.max(dp[i-1].mi, prices[i] + dp[i-1].mo),
      mo: Math.max(dp[i-1].mo, dp[i-1].mi-prices[i]) // 注意：只允许交易一次事，手上的现金数就是当天的股价的相反数，若允许交易多次
    }
  }
  return dp[prices.length-1].mi
};
// 贪心试一试
function maxProfit(prices) {
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    res += Math.max(prices[i] - prices[i-1], 0)
  }
  return res
}



/**
 * 股票问题1 - 121 买卖股票的最佳时机
 
 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 
 示例 1：
 输入：[7,1,5,3,6,4]
 输出：5
 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var maxProfit = function(prices) {
  // 动态规划
  let dp = {}
  dp[0] = {
    mi: 0,
    mo: -prices[0]
  }
  for(let i = 1; i < prices.length; i++) {
    dp[i] = {
      mi: Math.max(dp[i-1].mi, prices[i] + dp[i-1].mo),
      mo: Math.max(dp[i-1].mo, -prices[i])
    }
  }
  return dp[prices.length-1].mi
  // 贪心
  // let i = 0
  // let low = prices[i] // 7
  // let res = 0
  // for (let i = 0; i < prices.length; i++) {
  //     low = Math.min(low, prices[i])
  //     res = Math.max(res, prices[i] - low)
  // }
  // // while (i < prices.length - 1) {
  // //     i++
  // //     low = Math.min(prices[i], low)
  // //     res = Math.max(res, prices[i] - low)
  // //     console.log('low,res', low, res)
  // // }
  // return res
};
