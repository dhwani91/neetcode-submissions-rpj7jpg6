class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left =0, right =heights.length-1, maxWaterAreaSoFar=0;
        while(left < right){
            let length = right - left;
            let height= Math.min(heights[left], heights[right]);
            const currentWaterArea = length * height;
            maxWaterAreaSoFar = Math.max(currentWaterArea, maxWaterAreaSoFar);
            if(heights[left] <= heights[right]){
                left++;
            }else {
                right--;
            }
        }
        return maxWaterAreaSoFar;
    }
}
