class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
         const sortedIntervals = intervals.sort((a,b) => a[0]-b[0]);
        let mergeIntervals =[sortedIntervals.shift()];
        while(sortedIntervals.length) {

            const a = mergeIntervals.pop();
            const b = sortedIntervals.shift();

            const [aStart,aEnd]= a,[bStart,bEnd]=b 

            if(bStart > aEnd ){
                // do  not overlap
                mergeIntervals.push(a);
                mergeIntervals.push(b);
            }else {
                const  c= [aStart, Math.max(bEnd, aEnd)];
                mergeIntervals.push(c)
            }

        }
        return mergeIntervals
        
    }
}
