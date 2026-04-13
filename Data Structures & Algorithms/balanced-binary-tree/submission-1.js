/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true;
        function height(node){
            if(!node) return 0;
            let left = height(node.left);
            let right = height(node.right);
            let diff = Math.abs(left-right);
            if(diff >1) balanced= false;
            return  Math.max(left,right)  + 1;;

        }
        height(root)
        return balanced;
  

    }
}
