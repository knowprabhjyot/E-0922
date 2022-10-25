// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let map = {};
  let min;

  for (let i = 0 ; i < nums.length ; i++) {
      if (map[nums[i]]) {
          map[nums[i]]++;
      } else {
          map[nums[i]] = 1;
      }
  }

  for (let key in map) {
      if (map[key] === 1) {
          min = key;
      }
  }

  return min;


};