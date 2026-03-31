class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        nums.sort((a, b) => a - b);
        let result =[];
        //[[path]], [F,F,F]]
        let stack = [[[], Array.from({length: nums.length}, () => false)]]; 

        while(stack.length > 0){
            const [path, used] = stack.pop();
            if (path.length === nums.length) {
                result.push(path);
                continue;
            }
            for(let i =0; i<nums.length; i++){
                if(used[i]) continue;
                if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;
                const newPath = [...path];
                newPath.push(nums[i]);
                const newUsed =  [...used];
                newUsed[i]= true

                stack.push([newPath, newUsed]);
            }

        }

        return result;
    }
}
