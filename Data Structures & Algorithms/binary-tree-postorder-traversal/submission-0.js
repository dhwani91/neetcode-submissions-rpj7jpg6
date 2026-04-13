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
    //left -> right -> node
    postorderTraversal(root) {
        let result =[];
        let stack = [[root, false]]
        while(stack.length) {
            const [node, visited] = stack.pop();
            if(!node) continue;
            if(visited) {
                result.push(node.val)
            }else {
                stack.push([node, true]) // visitt the node;
                if(node.right) stack.push([node.right, false]);
                if(node.left) stack.push([node.left, false]);
            }
        }

      
        return result;

    }
    
}
