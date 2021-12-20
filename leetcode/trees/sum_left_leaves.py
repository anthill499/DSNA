def findSum(node):
    if not node:
        return 0
    sum = 0
    if node.left != None:
        if not node.left.left and not node.left.right:
            sum += node.left.val
        else: 
            sum += findSum(node.left)
        sum += findSum(node.right)

    return sum
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:    
        return findSum(root)