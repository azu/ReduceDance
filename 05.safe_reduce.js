var assert = require('assert');
var _ = require("underscore");
/*
    falsy な値が含まれてる意図しない結果になってしまう
 */
var nums = [1, 2, 3, null, 5];
var multFn = function (total, n) {
    return total * n;
};
_.reduce(nums, multFn);// => 0 になってしまう…

/*
    * multFnにチェック条件を入れるのは本質的じゃない
    * nullチェックをする高階関数を作ってやる
 */
function fnull(fn, defaultValue) {
    return function () {
        // falsyだった場合はdefaultValueにしたものに引数を構築し直す
        var args = _.map(arguments, function (e) {
            return e != null ? e : defaultValue;
        });
        return fn.apply(null, args);
    }
}

var safeMultFn = fnull(multFn, 1);// nullは1にすり替える
var totalMult = _.reduce(nums, safeMultFn);
assert.equal(totalMult, 30);