class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const SortedStrs = strs.map(word => word.split('').sort().join(''))
        const hash = {}

        for(let i = 0; i < strs.length; i++){
            if(!hash[SortedStrs[i]]) hash[SortedStrs[i]] = [strs[i]]

            else hash[SortedStrs[i]].push(strs[i])
        }

        return Object.values(hash)
    }
}
