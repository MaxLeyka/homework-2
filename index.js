function fSum(a) {
    let currentSum = a;

    function addNext(b) {
        currentSum += b;
        return addNext;
    }

    addNext.valueOf = function() {
        return currentSum;
    };

    return addNext;
}

console.log(Number(fSum(1)(2)(3)));
console.log(Number(fSum(1)(2)(2)(1)));

function strToObj(str) {
    if (!str || typeof str !== 'string') return {};

    return str
        .split('.')
        .reduceRight((acc, current) => ({
            [current]: acc
        }), {});
}

console.log(JSON.stringify(strToObj("one.two.three.four.five"), null, 2));
console.log(strToObj(""));