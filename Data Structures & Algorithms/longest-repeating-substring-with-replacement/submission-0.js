class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let windowStart =0, maxLenSoFar= -Infinity,maxFreq =0;
        let visited = {};
        for(let windowEnd =0; windowEnd <s.length;windowEnd++) {
            let rightChar = s[windowEnd];
            visited[rightChar] = (visited[rightChar] || 0) + 1;
            // track max freq in window
            maxFreq  = Math.max(maxFreq, visited[rightChar]);
            const windowSize = windowEnd - windowStart + 1;
            // If more than k replacements needed → shrink window

            if(windowSize - maxFreq > k ){
                const leftChar = s[windowStart];
                visited[leftChar]--;
                windowStart++;
            }
            maxLenSoFar = Math.max(maxLenSoFar,windowEnd - windowStart +1 );
        }
        return maxLenSoFar
    }
}
