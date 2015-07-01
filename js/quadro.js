//Construct abelian group
var Abelian = (function () {
    function Abelian(elems) {
        this.elems = elems;
        this.elements = elems;
    }
    Abelian.prototype.get_elements = function () {
        return this.elements;
    };
    Abelian.prototype.is_commutativity = function (item1, item2) {
        return item1 * item2 == item2 * item1;
    };
    return Abelian;
})();
exports.Abelian = Abelian;

var Functor = (function () {
    function Functor() {
    }
    Functor.prototype.fmap = function (X, func) {
        return X.map(func);
    };
    Functor.prototype.fmap2 = function (X, func, func2) {
        return X.map(func).map(func2);
    };
    Functor.prototype.fmapN = function (X) {
        var func = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            func[_i - 1] = arguments[_i];
        }
        var start = func[0](X);
        for (var i = 1; i < func.length; ++i) {
            start = func[i](start);
        }
        return start;
    };
    return Functor;
})();
exports.Functor = Functor;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IGroup = (function () {
    function IGroup(elems) {
    }
    return IGroup;
})();
var Group = (function (_super) {
    __extends(Group, _super);
    function Group(elems) {
        _super.call(this, elems);
    }
    //Return true is group is abelian
    Group.prototype.isAbelian = function () {
        return true;
    };
    return Group;
})(IGroup);
exports.Group = Group;

var ZeroItem = (function () {
    function ZeroItem(zero) {
        this.zero = zero;
    }
    return ZeroItem;
})();
var Monoid = (function () {
    function Monoid(values) {
        this.values = values;
    }
    Monoid.prototype.zero = function () {
        return new ZeroItem();
    };
    Monoid.prototype.multiply = function (item) {
        return new Monoid(this.values.concat(item));
    };
    Monoid.prototype.result = function () {
        return this.values;
    };
    return Monoid;
})();
exports.Monoid = Monoid;

var Permutations = (function () {
    function Permutations(elems) {
        this.elements = elems;
    }
    Permutations.prototype.output = function () {
        return Heap_gen(this.elements, this.elements.length);
    };
    Permutations.prototype.multiply = function (elems) {
    };
    return Permutations;
})();
exports.Permutations = Permutations;
function Heap_gen(elements, num) {
    if (num <= 1) {
        return elements;
    }
    for (var i = 0; i < num - 1; ++i) {
        Heap_gen(elements, num - 1);
        if (num % 2 == 0) {
            var res = swap(elements[i], elements[num - 1]);
            elements[i] = res[0];
            elements[num - 1] = res[1];
        }
        else {
            var res = swap(elements[0], elements[num - 1]);
            elements[0] = res[0];
            elements[num - 1] = res[1];
        }
    }
    return Heap_gen(elements, num - 1);
}
function swap(elem1, elem2) {
    var tmp = elem2;
    elem2 = elem1;
    elem1 = tmp;
    return [elem1, elem2];
}

var Set = (function () {
    function Set(values) {
        this.values = values;
    }
    Set.prototype.product = function (otherset) {
        return this.values.map(function (x) { return otherset.get_items().map(function (y) { return (x, y); }); });
    };
    Set.prototype.get_items = function () {
        return this.values;
    };
    //Return random element from set
    Set.prototype.randget = function () {
        return this.values[Math.random() * this.values.length];
    };
    //Return true is elem contains this set
    Set.prototype.isElement = function (elem) {
        return this.values.indexOf(elem) != -1;
    };
    return Set;
})();
exports.Set = Set;
