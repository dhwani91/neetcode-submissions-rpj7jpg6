class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result =[];
        if(!word1) return word2;
        if(!word2) return word1;
        let first =0, second=0;
        while(first < word1.length || second< word2.length){
            if(first <  word1.length) {
                result.push(word1[first++])
            }
            if(second < word2.length){
                result.push(word2[second++])
            }
        } 
         return result.join('')
    }
}
