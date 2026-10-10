class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        const mySet = new Set(nums);

        const uniqueArr = [...mySet];

        for (let i = 0; i < uniqueArr.length; i++) {
            nums[i] = uniqueArr[i];
        }

        return mySet.size;
    }
}
