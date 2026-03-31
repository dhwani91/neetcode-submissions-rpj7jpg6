class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(!s || !t) return false;
       const freqStrOfS= this.getFreqStr(s);
       const freqStrOfT= this.getFreqStr(t);
       if(freqStrOfS === freqStrOfT)return true
       return false;
    }

    getFreqStr(str){
        let freqArr = new Array(26).fill(0);
        for(let ch of str ){
            freqArr[ch.charCodeAt(0)-97] += 1
        }
        const freqStr = freqArr.join('');
        return freqStr;
    }
}
