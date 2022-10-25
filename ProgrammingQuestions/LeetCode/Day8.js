// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let map = { };
    let max = -Infinity;

    for (let i = 0 ; i < nums.length ; i++) {
        if (map[nums[i]]) { // map[2]
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;  // { '3' : 2, '2' : 1}
        }
    }   

    // O (M)

    for (let key in map) {
        if (map[key] > ( nums.length / 2)) {
            max = key;
        }
    }

    // O (N)

// Total Time Complexity = O(M) + O (N) --> O(M)
    return max;

};