/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let last=nums.lastIndexOf(target)
    let first=nums.indexOf(target)
    return [first,last]
};