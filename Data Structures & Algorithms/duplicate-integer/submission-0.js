class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        let yes = false
        for(let num of nums){
            if(!(num in obj)){
                obj[num] = 1
            }
            else obj[num] += 1
        }
        for(let item in obj){
            if(obj[item] >= 2) yes = true
        }

        return yes
    }
}
