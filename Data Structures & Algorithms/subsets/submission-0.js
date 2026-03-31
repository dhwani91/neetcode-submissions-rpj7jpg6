class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result =[];
        const backTrack = (start, path) => {
            result.push([...path]);
            for(let i=start;i<nums.length;i++){
                path.push(nums[i]);
                backTrack(i+1, path);
                path.pop();
            }

        };
        backTrack(0, []);
        return result;
    }
}
