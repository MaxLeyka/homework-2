const fSum = (a) =>{
    return function (b) {
        return function (c) {
            return a+b+c
        }
    }
}
console.log(fSum(2)(3)(5))

function strToObj(str) {
    return str.split('.').reverse().reduce((acc, current) => ({
        [current]: acc
    }), {});
}
//console.log не выводит полностью весь объект
console.dir(strToObj("one.two.tree.four.five"), { depth: 5 });