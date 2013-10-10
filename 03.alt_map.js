var assert = require("assert");
var _ = require("underscore");
/*
    * ``map`` は基本的に入力の個数と出力の個数が同じ
    * ``map`` だけだと ``filter`` (select) までは行えない
 */
// number以外は弾きたい
var filteredNumberToString = function (e) {
    if (typeof e === "number") {
        return String(e);
    }
};
var mappedArray = [1, null, 3].map(filteredNumberToString);
// 現実はundefinedになる
assert.deepEqual(mappedArray, ["1", undefined, "3"]);

/*
    * ``reduce`` なら違う(入力と出力の個数が異なる)ものを返せる
 */

function flatMap(obj, iterator) {
    return _.reduce(obj, function (memo, value, index, list) {
        var items = iterator(value, index, list);
        if (items == null) {
            return memo;
        }
        return memo.concat(items);
    }, []);
}

var flatMappedArray = flatMap(["string", 1, null, 3], filteredNumberToString);
// Numberだけにfilter + NumberをStringに変換した結果を返す
assert.deepEqual(flatMappedArray, ["1", "3"]);
