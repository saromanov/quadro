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

var ElementModel = (function () {
    function ElementModel(elems) {
        this.elements = elems;
    }
    ElementModel.prototype.output = function () {
        return this.elements;
    };
    return ElementModel;
})();
exports.ElementModel = ElementModel;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Either = (function () {
    function Either(l, r) {
        this.leftvalue = l;
        this.rightvalue = r;
    }
    Either.prototype.check = function (side, value) {
        if (side == "left" && typeof value == typeof this.leftvalue) {
            return new Left(value);
        }
        if (side == "right" && typeof value == typeof this.rightvalue) {
            return new Right(value);
        }
    };
    return Either;
})();
exports.Either = Either;
var Side = (function () {
    function Side(item) {
        this.name = "";
    }
    return Side;
})();
var Right = (function (_super) {
    __extends(Right, _super);
    function Right(item) {
        _super.call(this, item);
        this.name = "right";
        this.item = item;
    }
    return Right;
})(Side);
var Left = (function (_super) {
    __extends(Left, _super);
    function Left(item) {
        _super.call(this, item);
        this.name = "left";
        this.item = item;
    }
    return Left;
})(Side);

var Functor = (function () {
    function Functor(elems) {
        this.elements = elems;
    }
    Functor.prototype.fmap = function (func) {
        return this.elements.map(func);
    };
    Functor.prototype.fmap2 = function (func, func2) {
        return this.elements.map(func).map(func2);
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
    Functor.prototype.output = function () {
        return this.elements;
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
var permutations = require('./Permutations');
//Definition of group
var Group = (function () {
    function Group(elems) {
        this.elements = elems;
    }
    return Group;
})();
exports.Group = Group;
var SimpleGroup = (function (_super) {
    __extends(SimpleGroup, _super);
    function SimpleGroup(elems) {
        _super.call(this, elems);
    }
    SimpleGroup.prototype.negate = function () {
        return this.elements.map(function (x) { return -x; });
    };
    return SimpleGroup;
})(Group);
exports.SimpleGroup = SimpleGroup;
//ConstantGroup is generalization of Trivial group
var ConstantGroup = (function () {
    function ConstantGroup(element) {
        this.element = element;
    }
    ConstantGroup.prototype.output = function () {
        return this.element;
    };
    return ConstantGroup;
})();
exports.ConstantGroup = ConstantGroup;
//Construct symmetric group
/*Symmetric group
degree provides number of permutations with degree!
For example if degree = 4, this is S4 group
http://groupprops.subwiki.org/wiki/Symmetric_group:S4
*/
var SymmetricGroup = (function () {
    function SymmetricGroup(degree) {
        this.degree = degree;
        //console.log(new Permutations.Permutations([1,2,3]));
        this.items = this.constructElements(degree);
    }
    SymmetricGroup.prototype.constructElements = function (degree) {
        var list = [];
        for (var i = 1; i <= degree; ++i) {
            list.push(i);
        }
        var perm = new permutations.Permutations(list);
        this.ordernum = perm.total_num_of_permutations();
        this.listelements = list;
        return perm.all_permutations();
    };
    SymmetricGroup.prototype.order = function () {
        return this.ordernum;
    };
    //Exponent of the group
    SymmetricGroup.prototype.exponent = function () {
        var item = lcm(this.listelements[0], this.listelements[1]);
        for (var i = 2; i < this.listelements.length; ++i) {
            item = lcm(item, this.listelements[i]);
        }
        return item;
    };
    SymmetricGroup.prototype.elements = function () {
        return this.items;
    };
    return SymmetricGroup;
})();
exports.SymmetricGroup = SymmetricGroup;
function lcm(num1, num2) {
    return num1 * num2 / gcd(num1, num2);
}
function gcd(num1, num2) {
    if (num1 == undefined || num2 == undefined) {
        return 0;
    }
    var tmp;
    while (num1 != 0) {
        tmp = num1;
        num1 = num2 % num1;
        num2 = tmp;
    }
    return num2;
}

var ZeroItem = (function () {
    function ZeroItem(zero) {
        this.zero = zero;
    }
    return ZeroItem;
})();
var MonoidNumber = (function () {
    function MonoidNumber(mult, data) {
        this.data = data;
        this.zero = 0;
        this.mult = mult;
        this.data = data;
    }
    MonoidNumber.prototype.mempty = function () {
        return new MonoidNumber(this.mult, this.zero);
    };
    MonoidNumber.prototype.mappend = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var result = this.zero;
        console.log(this.data);
        args.forEach(function (x) {
            result += _this.mult(x);
        });
        return new MonoidNumber(this.mult, result);
    };
    return MonoidNumber;
})();
exports.MonoidNumber = MonoidNumber;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Option = (function () {
    function Option(item) {
        this.item = item;
    }
    return Option;
})();
var Some = (function (_super) {
    __extends(Some, _super);
    function Some(item) {
        _super.call(this, item);
    }
    return Some;
})(Option);
exports.Some = Some;
var None = (function (_super) {
    __extends(None, _super);
    function None() {
        _super.call(this, null);
    }
    return None;
})(Option);
exports.None = None;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var model = require('./Abstract');
var Permutations = (function (_super) {
    __extends(Permutations, _super);
    function Permutations(elems) {
        _super.call(this, elems);
    }
    //Single permutation of elements
    Permutations.prototype.perm = function (num) {
        var permnum = num || this.elements.length;
        return new Permutations(perms(this.elements, this.elements.length, true)[0]);
    };
    //return list of all permutations
    Permutations.prototype.all_permutations = function () {
        return perms(this.elements, this.elements.length);
    };
    Permutations.prototype.total_num_of_permutations = function () {
        return total_number_of_permutations(this.elements.length);
    };
    Permutations.prototype.output_with_repetition = function (num) {
        var _this = this;
        var vec = rand_vector(this.elements.length, this.elements.length - 1);
        return new Permutations(vec.map(function (x) { return _this.elements[x]; }));
    };
    Permutations.prototype.multiply = function (elems) {
        var result = [];
        for (var i = 0; i < this.elements.length; ++i) {
            result.push(this.elements[i]);
        }
        for (var i = 0; i < elems.length; ++i) {
            if (result.indexOf(elems[i]) == -1) {
                result.push(elems[i]);
            }
        }
        return new Permutations(result);
    };
    return Permutations;
})(model.ElementModel);
exports.Permutations = Permutations;
function rand_vector(num, bound) {
    var res = [];
    for (var i = 0; i < num; ++i) {
        res.push(Math.floor((Math.random() * bound) + 1));
    }
    return res;
}
function total_number_of_permutations(num) {
    var result = 1;
    for (var i = 1; i <= num; ++i) {
        result *= i;
    }
    return result;
}
function perms(elements, len, single) {
    if (single === void 0) { single = false; }
    var results = [];
    var permHeap = function (elements, num) {
        if (num == 1) {
            results.push(elements.slice(0));
        }
        for (var i = 0; i < num; ++i) {
            if (!single) {
                permHeap(elements, num - 1);
            }
            if (num % 2 == 0) {
                var tmp = elements[i];
                elements[i] = elements[num - 1];
                elements[num - 1] = tmp;
            }
            else {
                var tmp = elements[0];
                elements[0] = elements[num - 1];
                elements[num - 1] = tmp;
            }
        }
        if (single) {
            results.push(elements.slice(0));
        }
    };
    permHeap(elements, len);
    return results;
}

var Semigroup = (function () {
    function Semigroup(left, right) {
        this.left = left;
        this.right = right;
    }
    return Semigroup;
})();
exports.Semigroup = Semigroup;

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
