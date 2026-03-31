class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    dfs = (grid, row, col) =>  {
        // base case -  find water or out of boundry
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0" ) return;

        grid[row][col] = "0";

        this.dfs(grid, row+1, col); //up
        this.dfs(grid, row-1, col); // down
        this.dfs(grid, row, col+1); // right
        this.dfs(grid, row, col-1); // left
    }

    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;
        let count= 0;
        for(let row =0; row<grid.length; row++){
            for(let col=0; col<grid[0].length; col++){
                if(grid[row][col]=== "1"){
                    count++;
                    this.dfs(grid,row, col)
                    // explore all the paths
                }
            }
        }
        return count;
    }

}
