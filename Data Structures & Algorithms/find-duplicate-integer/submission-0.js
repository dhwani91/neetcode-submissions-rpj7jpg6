class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let i= 0;
        while(i< nums.length){
            let correctedIndex = nums[i] -1;
            if(nums[correctedIndex] !== nums[i]){
                [nums[i], nums[correctedIndex]] = [nums[correctedIndex], nums[i]]
            }else {
                i++;

            }
        }

         // find missing number
         for(let j=0;j<nums.length; j++){
            if(nums[j]-1 !== j){
               return nums[j]
            }
         }
    }
}
