class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    // eraseOverlapIntervals(intervals) {

    //     if (intervals.length === 0) return 0;

    //     const sortedIntervals =intervals.sort((a,b) => a[0] - b[0]);

    //     let removeCount = 0;

    //     let mergeIntervals = [sortedIntervals.shift()];

    //     while (sortedIntervals.length) {
    //         const a = mergeIntervals[mergeIntervals.length-1];

    //         const b = sortedIntervals.shift();

    //         const [aStart, aEnd] = a;
    //         const [bStart, bEnd] = b;
    //         if (bStart >= aEnd) {

    //             // no overlap → keep
    //             mergeIntervals.push(b);

    //         } else {

    //             // overlap → remove one
    //             removeCount++;

    //             // keep interval with smaller end
    //             if (bEnd < aEnd) {
    //                 mergeIntervals.pop();
    //                 mergeIntervals.push(b);

    //             }
    //         }
    //     }

    //     return removeCount;
    // }

    eraseOverlapIntervals(intervals) {
    //sort by end time
    let sortedByEndIntervals = intervals.sort((a,b) => a[1]-b[1]);
    let removal = 0;
    let prevEnd = intervals[0][1]; // end of the last kept interval

    // scan from the 2nd interval
    for(let i=1; i<intervals.length; i++){
        const [start, end] = intervals[i];
       
        if(start < prevEnd) {
            // overlap -> remove this one (the current interval ends later or equal than prev by construction)
            removal++;
        } else {
            prevEnd = end
        }
    }
    return removal; 
};
}