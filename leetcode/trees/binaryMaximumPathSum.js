var maxPathSum = function(root) {
    let globalMax = root.val;
    const dfs = (node) => {
        if (!node) return null;
        const left = dfs(node.left)
        const right = dfs(node.right)
        const r = Math.max(node.val + left, node.val + right,node.val)
        globalMax = Math.max(r, node.val + left + right, globalMax)
        return r
    }
    return Math.max(dfs(root), globalMax);
};
