class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = this.convertToAlphaNumericStr(s).toLocaleLowerCase();
        let left =0, right=str.length-1;
        while(left < right){
            if(str[left] !== str[right]){
                return false
            }
            left++;
            right--;
        }
        return true;
    
    }
     convertToAlphaNumericStr(str){
        return [...str].filter((c) =>   
            (c >= '0' && c <= '9') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z')).join('');
     }
}
