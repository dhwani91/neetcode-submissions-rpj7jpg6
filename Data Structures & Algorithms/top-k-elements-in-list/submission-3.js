
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
 class Solution {
  topKFrequent(nums, k) {
    const freqMap = new Map();

    for (let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const heap = new MaxHeap();

    for (let [num, freq] of freqMap.entries()) {
      heap.add(freq, num);
    }

    const result = [];

    for (let i = 0; i < k; i++) {
      const [freq, num] = heap.remove();
      result.push(num);
    }

    return result;
  }
}

 class MaxHeap {
  constructor() {
    this.heap = [];
  }

  add(freq, value) {
    this.heap.push([freq, value]);
    this.bubbleUp();
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      // compare frequency
      if (this.heap[idx][0] <= this.heap[parentIdx][0]) break;

      [this.heap[idx], this.heap[parentIdx]] =
        [this.heap[parentIdx], this.heap[idx]];

      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    let len = this.heap.length;

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let largest = idx;

      if (
        left < len &&
        this.heap[left][0] > this.heap[largest][0]
      ) {
        largest = left;
      }

      if (
        right < len &&
        this.heap[right][0] > this.heap[largest][0]
      ) {
        largest = right;
      }

      if (largest === idx) break;

      [this.heap[idx], this.heap[largest]] =
        [this.heap[largest], this.heap[idx]];

      idx = largest;
    }
  }
} 
