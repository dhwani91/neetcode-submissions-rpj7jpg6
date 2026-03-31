class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let combine = m+n - 1;
        let first = m-1;
        let second = n-1;
        while(second  >=0) {
            if(first >= 0 && nums1[first] > nums2[second]){
                nums1[combine]= nums1[first];
                first--;
            }else{
                nums1[combine]= nums2[second];
                second--;
            }
            combine--;
        }
    }
}
