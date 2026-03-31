class Solution {

    searchForRow(matrix, target){
        let rowStart = 0;
        let rowEnd = matrix.length - 1;
        let colStart = 0;
        let colEnd = matrix[0].length - 1;

        while(rowStart <= rowEnd){
            let mid = Math.floor((rowStart + rowEnd) / 2);

            if(target >= matrix[mid][colStart] &&
               target <= matrix[mid][colEnd]){
                return matrix[mid];
            }
            else if(target > matrix[mid][colEnd]){
                rowStart = mid + 1;
            }
            else {
                rowEnd = mid - 1;
            }
        }

        return null;
    }

    searchForCol(row, target){
        let colStart = 0;
        let colEnd = row.length - 1;

        while(colStart <= colEnd){
            let mid = Math.floor((colStart + colEnd) / 2);

            if(row[mid] === target){
                return true;
            }
            else if(row[mid] < target){
                colStart = mid + 1;
            }
            else {
                colEnd = mid - 1;
            }
        }

        return false;
    }

    searchMatrix(matrix, target) {
        const rowFound = this.searchForRow(matrix, target);
        return rowFound ? this.searchForCol(rowFound, target) : false;
    }
}