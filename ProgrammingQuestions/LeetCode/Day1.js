// Question 1 (THURSDAY)
// https://leetcode.com/problems/missing-number/


// SOLUTION

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let givenTotal = 0;
    let expectedTotal = 0;
    let n = nums.length;

    // nums [3, 0 , 1];

    // givenTotal = 3 + 0 + 1 = 4
    // ExpectedTotal = 3 + 0 + 1 + 2 = 6

    // O(n)
    for (let i = 0 ; i < n; i++) {
        givenTotal += nums[i]; // 4
    }

    // O(n)
    // for (let i = 0; i <= n;i++) {
    //     expectedTotal += i;
    // }

    // O(1)
    expectedTotal = n * ((n + 1) / 2);

    // O(n) + O(1) ===> O(n)
    return expectedTotal - givenTotal;
};