class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const numSet = new Set(nums);
        // goal is the first the first element of sequence
        for(let num of numSet){
            if(!numSet.has(num-1)){
                let current = num;
                let count =1;

                while(numSet.has(current +1)){
                    current++;
                    count++;

                }
                longest = Math.max(count, longest)
            }
        }

        return longest;
    }
}
