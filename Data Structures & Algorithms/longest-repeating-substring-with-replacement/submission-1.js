class Solution {
    characterReplacement(s, k) {
        let windowStart = 0;
        let maxLen = 0;
        let maxFreq = 0;
        let visited = {};

        for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
            let rightChar = s[windowEnd];
            visited[rightChar] = (visited[rightChar] || 0) + 1;

            maxFreq = Math.max(maxFreq, visited[rightChar]);

            const windowSize = windowEnd - windowStart + 1; // FIXED

            if (windowSize - maxFreq > k) {
                const leftChar = s[windowStart];
                visited[leftChar]--;
                windowStart++;
            }

            maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
        }

        return maxLen;
    }
}
