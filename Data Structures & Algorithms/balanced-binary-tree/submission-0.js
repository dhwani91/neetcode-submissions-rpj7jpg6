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
        let isBalanced =  true;

       function findHeight(root){
            if(!root) return 0;
            if(isBalanced === false) return;
            let leftHeight = findHeight(root.left);
            let rightHeight = findHeight(root.right);
            let totalHeight = Math.max(leftHeight,rightHeight) +1;
            let gap = Math.abs(rightHeight - leftHeight)
            if(gap > 1) isBalanced = false;
            return totalHeight

        }
        findHeight(root)
        return isBalanced

    }
}
