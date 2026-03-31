class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let len= nums.length, remaining = len- (k+1);
        let last =len-1;
        while(last > remaining){
            nums.unshift(nums.pop());
            last--;
        }
    }
}
