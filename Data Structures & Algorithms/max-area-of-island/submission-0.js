class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

maxAreaOfIsland(grid) {

    let maxArea = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {

            if (grid[row][col] === 1) {

                let area = this.dfs(grid, row, col);

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
}

dfs(grid, row, col) {

    // boundary or water
    if (
        row < 0 ||
        col < 0 ||
        row >= grid.length ||
        col >= grid[0].length ||
        grid[row][col] === 0
    ) {
        return 0;
    }

    // mark visited
    grid[row][col] = 0;

    // count current + neighbors
    return 1 +
        this.dfs(grid, row + 1, col) +
        this.dfs(grid, row - 1, col) +
        this.dfs(grid, row, col + 1) +
        this.dfs(grid, row, col - 1);
}
}
