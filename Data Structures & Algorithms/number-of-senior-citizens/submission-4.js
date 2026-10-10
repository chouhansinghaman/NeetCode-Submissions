class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let countAges = 0

        for(let item of details){
            const age = parseInt(`${item[11]}${item[12]}`)

            if(age>60) countAges++
        }

        return countAges
    }
}
