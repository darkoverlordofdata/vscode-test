var Scooby = (function () {
    function Scooby(snacks) {
        if (snacks === void 0) { snacks = 42; }
        this.snacks = snacks;
        this.doo = new Doo('fred');
        this.doo.eat('snack');
    }
    Scooby.prototype.ruhroh = function () {
        console.log('Look Out');
    };
    return Scooby;
})();
//# sourceMappingURL=Scooby.js.map