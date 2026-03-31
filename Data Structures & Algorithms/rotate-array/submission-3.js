class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let len= nums.length;
        k = k % len;
        if (k === 0) return;
        let count = k;
        while(count){
            nums.unshift(nums.pop());
            count--;
        }
    }
}
