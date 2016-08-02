/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    'use strict'
    const binaryA = a.split('').reverse();
    const binaryB = b.split('').reverse();
    let result = [];
    let add = 0;

    const length = Math.max(binaryA.length, binaryB.length);
    for (let i = 0; i < length; i++) {
        let sum = (binaryA[i] * 1 ? 1 : 0) + (binaryB[i] * 1 ? 1 : 0) + add;
        result[i] = sum & 1;
        add = (sum >= 2 ? 1 : 0);
    }

    if (add) {
        result[length] = 1
    }

    return '' + result.reverse().join('');
};
