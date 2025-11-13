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
    return str.split('.').reverse().reduce((acc, current) => ({
        [current]: acc
    }), {});
}
//console.log не выводит полностью весь объект
console.dir(strToObj("one.two.tree.four.five"), { depth: 5 });