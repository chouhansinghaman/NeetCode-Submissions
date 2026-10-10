class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let rows of matrix) {
            const arr = rows;

            if (arr.includes(target)) return true;
        }

        return false;
    }
}
