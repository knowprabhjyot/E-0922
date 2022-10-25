// https://leetcode.com/problems/remove-element/description/

// let low = 0;

// while(low < nums.length) {
//     if (nums[low] == val) {
//         nums.splice(low, 1);
//         continue;
//     }
//     low++;
// }

// return nums.length;



    // var removeElement = function(nums, val) {
    //     let nextPosition = 0;
    
    //     for (let i = 0 ; i < nums.length; i++) {
    //         if (nums[i] !== val) {
    //             nums[nextPosition] = nums[i];
    //              nextPosition++;
    //         }
    //     }
    
    //      return nextPosition;
    //  };