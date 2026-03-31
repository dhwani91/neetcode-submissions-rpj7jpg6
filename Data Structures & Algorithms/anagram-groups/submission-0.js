class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupMap = new Map();
        for(let str of strs){
            const keyArr = this.getGroupkey(str);
            const key = keyArr.join(',')
            if(!groupMap.has(key)) {
                groupMap.set(key,[]);
                }
            groupMap.get(key).push(str)
        }
        return Array.from(groupMap.values());
    }

    getGroupkey(str){
        let key = new Array(26).fill(0);
        for(let ch of str){
            key[ch.charCodeAt(0)- 97] += 1
        }
        return key;
    }
}


