class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let hashMap = new Map<string,number>();
        for(let ch of s) {
            if(hashMap.has(ch)){
                hashMap.set(ch, hashMap.get(ch) + 1)
            }else {
                hashMap.set(ch,1);
            }
        }
        console.log("hasMap", hashMap)

        for(let ch of t){
            if(!hashMap.has(ch)){
                return false
            }
            let count = hashMap.get(ch)! -1 ;
            if(count === 0){
                hashMap.delete(ch)
            } else {
                hashMap.set(ch,count)
            }
        }
        return hashMap.size === 0
    }
}
