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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
  
lowestCommonAncestor(root, p, q) {
  function getPath(root, target) {
      if (!root) return [];

      const stack = [[root, [root]]];

      while (stack.length > 0) {
      const [node, path] = stack.pop();
      console.log("@@path", path)

      if (node.val === target.val) return path;

      if (target.val > node.val && node.right) {
      stack.push([node.right,[...path, node.right]]);
      }

      if (target.val < node.val && node.left) {
      stack.push([node.left, [...path, node.left]]);
      }
      }
    }

  const path1 = getPath(root, p); // path to p
  const path2 = getPath(root, q); // path to q
  console.log("@@path1", path1);
  console.log("@@path2", path2);
  let i = 0;
  while (i < path1.length && i < path2.length && path1[i] === path2[i]) {
    i++;
    console.log("$$yes", i)
  }
    return path1[i - 1];
  }
}
