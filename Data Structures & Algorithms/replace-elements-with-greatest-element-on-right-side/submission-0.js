class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for(let i = 0; i<arr.length-1; i++){
            let result = arr.slice(i+1, )
            let maxValOnRight = Math.max(...result)
            arr[i] = maxValOnRight
        }
        arr.pop()
        arr.push(-1)
        return arr
    }
}
