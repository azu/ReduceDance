var assert = require("assert");

/*
    * forと違いimmutableなオブジェクトを使わないで合計を出せる
    * <a href="http://toolness.github.io/slowmo-js/?code=%5B1%2C%202%5D.reduce(function%20(x%2C%20y)%20%7B%20return%20x%20%2B%20y%20%7D)%3B&amp;filterrange=5-5">Basic flow</a>
*/
var total = [1, 2, 3, 4, 5].reduce(function (a, b) {
    return a + b;
});
assert.equal(total, 15);


/*
    初期値を指定することもできる
 */
var initialTotal = [0, 1, 2, 3, 4].reduce(function (a, b) {
    return a + b;
}, 10);
assert.equal(initialTotal, 20);

/*
   * 空の配列の場合は例外を吐く
   * [15.4.4.21 Array.prototype.reduce](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.21 "15.4.4.21 Array.prototype.reduce")
   * Step 8.c
 */
assert.throws(
    function () {
        [].reduce(function (a, b) {
            return a + b
        });
    },
    TypeError,
    "k < len の場合はTypeError"
);
