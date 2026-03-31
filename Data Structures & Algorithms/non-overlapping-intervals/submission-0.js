class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        if (intervals.length === 0) return 0;

        const sortedIntervals =
            [...intervals].sort((a,b) => a[0] - b[0]);

        let removeCount = 0;

        let mergeIntervals = [sortedIntervals.shift()];

        while (sortedIntervals.length) {

            const a = mergeIntervals[mergeIntervals.length - 1];

            const b = sortedIntervals.shift();

            const [aStart, aEnd] = a;
            const [bStart, bEnd] = b;
            console.log("$$mergeIntervals",mergeIntervals);
            if (bStart >= aEnd) {

                // no overlap → keep
                mergeIntervals.push(b);

            } else {

                // overlap → remove one
                removeCount++;

                // keep interval with smaller end
                if (bEnd < aEnd) {
                    mergeIntervals.pop();
                    mergeIntervals.push(b);

                }
            }
        }

        return removeCount;
    }
}