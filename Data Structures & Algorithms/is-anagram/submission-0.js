class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false

        else{
            const str1 = [...s].sort().join("")
        const str2 = [...t].sort().join("")

        if(str1===str2){
            return true
        }

        else return false

        }
    }
}
