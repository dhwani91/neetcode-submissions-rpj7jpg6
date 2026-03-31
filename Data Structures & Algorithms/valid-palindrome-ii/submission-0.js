class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    validPalindrome(s) {

   function isPalindrom(left, right){
        while(left < right){
            if(s[left] !==s[right]){
                return false
            }
            left++;
            right--;
        }
        return true;
    }
        let left = 0,right = s.length -1;
        while(left < right) {
            if(s[left] === s[right]) {
                left++;
                right--;
            }else {
                return isPalindrom(left+1, right) || isPalindrom(left, right-1);
            }

        }
        return true;
    }
}
