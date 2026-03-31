class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0, right =nums.length-1;
        while(left < right){
            let mid = Math.floor(left+ (right-left)/2);
            // sored array ascending order -> min is left
            if(nums[left] < nums[right]) {
                return nums[left]

            }else if(nums[mid] > nums[right]) { // min is in unsorted part
            // min is in right side
                left = mid + 1;
            }else {
                right = mid;
            }
        }
       return nums[left] 
    }
}
