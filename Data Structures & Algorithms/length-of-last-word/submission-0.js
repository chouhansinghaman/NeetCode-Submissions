class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const lastWord = s.trim().split(" ").pop()
        return lastWord.length
    }
}
