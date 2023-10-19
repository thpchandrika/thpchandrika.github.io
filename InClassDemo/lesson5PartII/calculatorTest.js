describe("adding", function () {
    it("adding 5 + 5 === 10", function () {
        assert.strictEqual(add(5.0, 5), 10)
    });
    it("adding (-5) + (-5) === -10 ", function () {
        assert.strictEqual(add(-5, -5), -10)
    });
    it("adding 0 + 0 === 0 ", function () {
        assert.strictEqual(add(0, 0), 0)
    })

    it("adding null + 5 === 5", function () {
        assert.strictEqual(add(null, 5), 5)
    })
    it("adding null + null === 0", function () {
        assert.strictEqual(add(null, null), 0)
    })
    it("adding null + undefined ---> NaN", function () {
        assert.isNaN(add(null, undefined), 0)
    })


})

describe("substracting", function () {
    it("adding 1 -5  ", function () {
        assert.strictEqual(add(1, -5), -4)
    });

})

describe("array", function () {
    it("array [1,3,2] to [1,2,3] ", function () {
        assert.deepEqual([1, 3, 2], [1, 3, 2])
    });

})

describe("object", function () {
    it("object {x:1,y:2} to {y:2,x:1}  ", function () {
        assert.deepEqual({ x: 1, y: 2 }, { y: 2, x: 1 })
    });

})