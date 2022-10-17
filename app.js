//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


function findIndicies(arr, target){
    //grab num
    for(let i = 0; i < arr.length; i++){
      //comparing outside num to internal nums
      for(let k = 0; k < arr.length; k++){
        if(arr[i]+ arr[k]=== target && i !== k){
          return [i,k]
        }
      }
    }
    
  }
  console.log(findIndicies([1,2,3,4,5], 9), '[3,4]')
  console.log(findIndicies([5,6,9], 11), '[0,1]')
  console.log(findIndicies([22,7,100,5], 12), '[0,3]')