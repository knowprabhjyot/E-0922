// Question 2 (FRIDAY)
// https://leetcode.com/problems/two-sum/


  // Brute Force Solution (O N * N)
  for (let i = 0 ; i < nums.length ; i++) {
    for (let j = i + 1; j < nums.length ; j++) {
        if (nums[i] + nums[j] === target) {
            return [i, j];
        }
    }
}



// BETTER SOLUTION
