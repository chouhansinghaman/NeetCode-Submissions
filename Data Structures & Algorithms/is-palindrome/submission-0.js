class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.toLowerCase().replace(/[^a-z0-9]/g, "").split("")

        return [...arr].reverse().join("") === arr.join("")
    }
}
