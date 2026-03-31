class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack =[];
        for(let ch of s){
            if(ch === '(' ||  ch === '{' || ch ==='[') {
                stack.push(ch);
            }else {
                const top = stack.pop();
                if((ch === ')' && top !==  '(') || (ch === ']' && top !==  '[') || (ch === '}' && top !==  '{')){
                    return false;
                }

            }
        }
        return stack.length === 0;    
    }
}