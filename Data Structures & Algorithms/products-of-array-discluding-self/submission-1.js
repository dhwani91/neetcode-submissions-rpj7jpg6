class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result =[];
        let leftProduct = 1, rightProduct = 1;
        // left to right
        for(let i=0; i<nums.length; i++){
            result[i]= leftProduct;
            leftProduct *= nums[i]
        }

        // right to left
        for(let i=nums.length-1;i>=0; i--){
            result[i] *= rightProduct;
            rightProduct *= nums[i]
        }

        return result;

    }
}
