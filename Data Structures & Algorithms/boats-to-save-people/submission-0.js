class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a-b);
        let left =0, right= people.length-1, result =0;
        while(left <= right) {
            let remain = limit - people[right];
            right--;
            result++;
            if(remain >= people[left])
                left++
            
        }
        return result;  
    }
}
