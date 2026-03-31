class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWaterAreaSoFar= 0,left=0, right= heights.length-1;

        while(left < right){
            let  length = right - left;
            let height = Math.min(heights[right], heights[left])
            const currentWaterArea = length * height
            maxWaterAreaSoFar = Math.max(currentWaterArea,maxWaterAreaSoFar);
            if(heights[left]<heights[right]){
                left++
            }else if(heights[right]<heights[left]){
                right--
            } else if(heights[left] === heights[right]){
                left++;
            }
        }
        return maxWaterAreaSoFar;
    }
}
