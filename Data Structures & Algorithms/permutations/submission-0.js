class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let stack = [];
        let result =[];
        stack.push([[], Array.from({length: nums.length} , () => false )]);

        while(stack.length > 0){
            let [path, used] = stack.pop();
            if(path.length === nums.length){
                result.push([...path]);
                continue;
            }
            for(let i =0;i< nums.length;i++){
                if(!used[i]){
                    const newPath = [...path];
                    newPath.push(nums[i])

                    const newUsed = [...used];
                    newUsed[i] = true;
                    stack.push([newPath,newUsed]);
                }

            }

        }

        return result;
  
    }
}
