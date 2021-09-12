/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 两种情况 mid在左连续中 mid在右连续中
    let length = nums.length
    // 部分有序
    let left = 0
    let right = length - 1
    while(left <= right) { // 📢 <=
        let mid = Math.floor((left + right) / 2)
        if (target == nums[mid]) return mid
        if (nums[0] <= nums[mid]) { // 前有序
            if(nums[0] <= target && target < nums[mid]) { // 在前 📢<=
                right = mid - 1
            } else { // 在后
                left  = mid + 1
            }
        } else { // 后有序
            if (target <= nums[length -1] && target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};
