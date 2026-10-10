class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        const reversedNum = x.toString().split("").reverse().join("")

        return x.toString() === reversedNum
    }
}
