var sumOfLeftLeaves = function(root) {
    const findSum = (node) => {
        if (!node) return 0;
        let sum = 0
        if (node.left) {
            sum += (!node.left.left && !node.left.right) ? node.left.val : findSum(node.left)
        }
        sum += findSum(node.right)
        return sum;
    }
    return findSum(root)
};

