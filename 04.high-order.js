var assert = require("assert");
/*
    * 高階関数 - Higher-Order Functions
    * 関数を返す関数
 */

var ComparisonResult = {
    ascending: -1,// <
    same: 0,      // ==
    descending: 1 // >
};
function comparator(predicate) {
    return function (x, y) {
        if (predicate(x, y)) {
            return ComparisonResult.ascending
        } else if (predicate(y, x)) {
            return ComparisonResult.descending;
        }
        return ComparisonResult.same;
    };
}

/*
 * 真偽値 -> comparator を通して -> ``NSComparisonResult`` みたいな
 * ``<`` ``==`` ``>`` の3種類の状態にして使う。
 * 真偽値を返す関数を Predicates という
*/
function isLessOrEqual(x, y) {
    return x <= y;
}
var values = [2, 3, -1, -6, 0, -108, 42, 10];
var expectedSortedValues = [-108, -6, -1, 0, 2, 3, 10, 42];
var results = values.sort(comparator(isLessOrEqual));
assert.deepEqual(results, expectedSortedValues);