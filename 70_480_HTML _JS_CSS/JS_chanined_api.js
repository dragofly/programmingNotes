var Calc = function(start) {
    var that = this;
    this.add = function(x) {
        start = start + x;
        return that;
    }

    this.multuply = function(x) {
        start = start * x;
        return that;
    }

    this.get = function(callback) {
        callback(start);
        return that;
    }
};

new Calc(3)
    .add(3)
    .add(2)
    .multuply(3)
    .get(function(v) { console.log(v); });