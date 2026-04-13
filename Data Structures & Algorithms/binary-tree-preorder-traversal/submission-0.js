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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let result =[];
        let stack = [[root, false]];
        while(stack.length){
            let [curr,visited] = stack.pop();
             if (!curr) continue;
            if(visited) {
                result.push(curr.val)
            }else {
            if(curr.right) {
                stack.push([curr.right, false])
            }
             if(curr.left) {
                stack.push([curr.left, false])
            }
            stack.push([curr, true]);
            }

        }
        return result;
    }
}
