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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
 if(!root) return false

    let stack =[];
    stack.push([root, targetSum-root.val]);

    while(stack.length > 0) {
        const [node, currSum] = stack.pop();
        // leaf node
         // Leaf node check
        if (!node.left && !node.right && currSum === 0) {
            return true;
        }
        if(node.left) {
            stack.push([node.left, currSum - node.left.val])
        }
        if(node.right) {
            stack.push([node.right, currSum - node.right.val])
        }
    }
    return false

    }
}
