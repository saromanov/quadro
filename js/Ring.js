var NumRing = (function () {
    function NumRing() {
    }
    NumRing.prototype.add = function (one, second) {
        return one + second;
    };
    NumRing.prototype.multiply = function (one, second) {
        return one * second;
    };
    return NumRing;
})();
