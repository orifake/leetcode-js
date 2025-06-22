// https://leetcode.cn/discuss/post/3142617/zi-jie-mian-shi-xiao-yu-nde-zui-da-shu-b-vjx6/
// 给定一个数n如23121;给定一组数字a如[2 4 9]求由a中元素组成的小于n的最大数

function maxNumber(n, a) {
    const digits = String(n).split('').map(Number);
    const aSet = new Set(a);
    let result = '';

    function backtrack(index, isTight) {
        if (index === digits.length) {
            return;
        }

        let limit = isTight ? digits[index] : 9;

        for (let digit = limit; digit >= 0; digit--) {
            if (aSet.has(digit)) {
                console.log(`Trying digit: ${digit} at index: ${index}, isTight: ${isTight}`);
                result += digit;
                backtrack(index + 1, isTight && (digit === limit));
                return; // 找到最大数后直接返回
            }
        }
    }

    backtrack(0, true);
    if (n === result * 1) {
        result = maxNumber(n-1, a); // 如果结果等于n，去掉最后一位
    }
    return result || '0'; // 如果没有找到合适的数字，返回'0'
}
// console.log(maxNumber(100, [1, 0])); // 输出: '100'
console.log(maxNumber(23121, [2, 4, 9])); // 输出: '249'

