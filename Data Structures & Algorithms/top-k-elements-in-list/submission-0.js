class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     
    const freqMap = new Map();
    for(let num of nums){
        freqMap.set(num,(freqMap.get(num)|| 0)+ 1);
    }
    console.log("$$freq", freqMap);
    const buckets =  Array.from({ length: nums.length+1 }, () => []);
     for (let [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }
    const result = []

    for(let i= buckets.length-1;i >=0 && result.length < k; i--){
        result.push(...buckets[i])
    }

    return result.slice(0, k);
    }
}
