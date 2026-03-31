class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left=0, right=numbers.length-1;
        let pair =[];
        while(left !==right) {
            let pairSum = numbers[left]+ numbers[right];
            if(pairSum === target){
                pair = [left +1, right+1];
                break;
            }else if(pairSum < target){
                left++
            }else right--

        }
        return pair;    
    }
}
