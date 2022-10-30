var maxArea = function(height) {
    let pA = 0
    let pB = height.length - 1
    let maxArea = 0;
    
    while (pA < pB) {
        maxArea = Math.max(maxArea, Math.min(height[pA], height[pB]) * (pB - pA))
        height[pA] <= height[pB] ? pA++ : pB--
    }
    return maxArea;
};