/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = intervals.map((i) => i.start).sort((a, b) => a - b);
        const end = intervals.map((i) => i.end).sort((a, b) => a - b);

        let res =0,s =0, e =0, count=0;
        while(s < intervals.length){
            if(start[s]< end[e]){
                s++;
                count++
            }else {
                e++;
                count--;
            }
            res = Math.max(res,count)
        }


        return res;
    }



    // sweep line algorithm 

//  minMeetingRooms(intervals) {
//   const events = [];
//   for (const [start, end] of intervals) {
//     events.push([start, 1]); // +1 = start
//     events.push([end, -1]);  // -1 = end
//   }
//   console.log("$$events",events)


//   events.sort((a, b) => a[0] - b[0] || a[1] - b[1]); // end before start on tie

//   let activeRooms = 0;
//   let maxRooms = 0;

//   for (const [meeting, delta] of events) {
//     console.log("$$delta", delta)
//     activeRooms += delta;
//     maxRooms = Math.max(maxRooms, activeRooms);
//   }

//   return maxRooms;
// }
}
