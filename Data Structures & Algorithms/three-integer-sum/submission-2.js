class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let triplets =[];
        nums.sort((a,b) => a-b);
        for(let i=0; i< nums.length; i++){
            let targetSum =  - nums[i];
             if(i>0 && nums[i]=== nums[i-1]) continue;
             this.searchPair(nums, targetSum, i+1, triplets)
        }
        return triplets;

    }

    searchPair(nums,targetSum, left, triplets) {
        let right = nums.length -1 ;
        while(left < right){
            let currentSum = nums[left]+nums[right];
            if(targetSum === currentSum){
                triplets.push([-targetSum, nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left-1]){
                    left++;
                }
                while(left < right && nums[right] === nums[right+1]){
                    right--;
                }
            }else if(currentSum < targetSum){
                left++;
            }else{
                right--;
            }
        }
    }
}
