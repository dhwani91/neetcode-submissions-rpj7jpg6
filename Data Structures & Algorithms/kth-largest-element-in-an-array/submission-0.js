class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let result =[];
        const maxHeap = new MaxHeap();
        for (let i = 0; i < nums.length; i++) {
            maxHeap.add(nums[i]);
        }

        for(let j =0;j<k; j++){
            result = maxHeap.remove();
        }
        return result;
    }
}

class MaxHeap {
    constructor(){
      this.heap =[];  
    }
    add(val) {
        this.heap.push(val);
        this.bubbleUp();

    }
    remove(){
        if (this.heap.length === 1) return this.heap.pop();
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown()
        return max;

    }
    bubbleUp() {
        let idx = this.heap.length - 1;
         while(idx > 0){
            let parentIndex = Math.floor((idx - 1) / 2);
            if(this.heap[idx]< this.heap[parentIndex]) break;
            [this.heap[idx], this.heap[parentIndex]]= [this.heap[parentIndex],this.heap[idx]];
            idx = parentIndex;
         }

    }
    bubbleDown() {
        let idx =0;
        let length = this.heap.length;

        while(true) {
            let highest =idx;
            let left = 2 * idx +1;
            let right = 2 * idx +2;
            if(left < length && this.heap[left]>this.heap[highest]){
                highest = left
            }

            if(right < length && this.heap[right]>this.heap[highest]){
                highest = right
            }

            if(highest=== idx ) break;
            [this.heap[idx], this.heap[highest]] =[this.heap[highest],this.heap[idx]]
            idx = highest
        }


    }

}
