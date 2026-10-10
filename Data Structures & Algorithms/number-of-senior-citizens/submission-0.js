class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let countAges = 0;
        for (let item of details) {
            let str = item;
            let age = "";
            let arr = [];
            for (let item of str) {
                arr.push(item);
            }
            for (let i = 11; i <= 12; i++) {
                age += arr[i];
            }

            if (parseInt(age) > 60) countAges++;
        }
        return countAges;
    }
}
