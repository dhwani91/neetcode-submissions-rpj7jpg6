class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hashSet = new Set<number>();
        for (let num of nums) {
            if(hashSet.has(num)){
                return true
            }else {
                hashSet.add(num)
            }
        }
        return false

    }
}
