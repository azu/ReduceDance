var assert = require("assert");
assert.ng = function(value, message){
    assert.equal(false, !!value, message);
};
/*

    * ``reduce`` があれば、補完mapやeveryなどは実装できる
    * 柔軟性が高い

> このうちreduceが一番強力で、mapやfilterやsumなど、他の関数もこれをもとに定義できます

via [Functional JavaScript](https://gist.github.com/ympbyc/5564146 "Functional JavaScript")

*/
function every(array, predicate) {
    return array.reduce(function (prev, current, index, list) {
        if (prev) {
            return predicate(current, index, list);
        } else {
            return prev;
        }
    }, true);
}

function isBigEnough(element, index, list) {
    return (element >= 10);
}
assert.ok(every([12, 130, 44], isBigEnough));
assert.ng(every([1, 100, 200], isBigEnough));