class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0

        for(const char of t){
            if(char === s[i]) i++
        }

        return i === s.length
    }
}
