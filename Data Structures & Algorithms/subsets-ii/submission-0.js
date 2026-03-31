class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result =[];
        nums.sort((a,b) => a - b);
        const backTrack = (start, path)  => {
            result.push([...path]);
            for(let i= start;i<nums.length;i++){
                if(i> start && nums[i]=== nums[i-1]) continue;
                path.push(nums[i]);
                backTrack(i+1, path);
                path.pop();
            }
        } 
        backTrack(0, [])
        return result;
    }
}
