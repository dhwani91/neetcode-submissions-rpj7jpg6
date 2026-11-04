class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans =[];
        let length = nums.length;
        let arr = new Array(2*length);
        for (let i=0;i<length; i++) {
            ans[i]=nums[i];
            ans[length+i]= nums[i]
        }
        return ans;      
    }
}
