class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Array(9).fill(0).map(() => new Set());
        let cols = new Array(9).fill(0).map(() => new Set());
        let boxes = new Array(9).fill(0).map(() => new Set());
        const boardSize =9;

        // iterate through matrix 
        for(let row =0; row< boardSize; row++){
            for(let col =0; col< boardSize; col++){
                let val = board[row][col]

                if(val === '.') continue;
                //012
                //345
                //567

                const boxId = Math.floor(row/3)* 3+ Math.floor(col/3)
                 if(rows[row].has(val)|| cols[col].has(val) || boxes[boxId].has(val)) {
                    return false
                 }
                 rows[row].add(val);
                 cols[col].add(val);
                 boxes[boxId].add(val);
            }
        }
        return true;    
    }
}        