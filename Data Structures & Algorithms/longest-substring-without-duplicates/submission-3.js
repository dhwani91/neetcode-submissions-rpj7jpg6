class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
if(s.length ===0) return 0
    
let windowStart=0,
    windowEnd=0,
    maxStrCount= -Infinity;
    const freqMap  = new Set();
    while(windowEnd < s.length){
        if(!freqMap.has(s[windowEnd])) {
           freqMap.add(s[windowEnd],windowEnd )
            windowEnd++;
            maxStrCount = Math.max(freqMap.size, maxStrCount)
        }else{
             freqMap.delete(s[windowStart]);   
             windowStart++;       
        }                    
    }
    return maxStrCount
    }
}
