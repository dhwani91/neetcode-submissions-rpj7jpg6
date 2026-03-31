class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */

    findthePosition(matrix){
        let position =[];
        for(let row =0; row<matrix.length; row++){
            for(let col =0; col< matrix[0].length; col++){
                if(matrix[row][col]=== 0){
                     position.push([row,col]) 
                }
            }
        }
        return position;
    }
    setZeroes(matrix) {
        let positions = this.findthePosition(matrix);
        console.log("$$findthePosition",positions)
         for(let [r,c] of positions){
            for(let row =0; row<matrix.length; row++){
            for(let col =0; col< matrix[0].length; col++){
                matrix[row][c]=0;
                matrix[r][col]=0;
            }
         }
    }
        // find the positions of zeros
        // make entire row or column 0


    }
}
