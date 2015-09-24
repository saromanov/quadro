//Construct abelian group
var AbelianGroup = (function () {
    function AbelianGroup(elems) {
        this.elems = elems;
        this.elements = elems;
    }
    AbelianGroup.prototype.get_elements = function () {
        return this.elements;
    };
    AbelianGroup.prototype.plus = function (elements) {
        if (elements.length == 0) {
            return;
        }
        for (var i = 0; i < elements.length; ++i) {
            this.elements.push(elements[i]);
        }
    };
    return AbelianGroup;
})();
exports.AbelianGroup = AbelianGroup;

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

var Vector = require('./Vector');
//Norms in Banach space
//https://en.wikipedia.org/wiki/List_of_Banach_spaces
// This class provides implementation of norms
var BanachSpace = (function () {
    function BanachSpace() {
    }
    BanachSpace.prototype.euclidean = function (vec) {
        return Math.sqrt(new Vector.Vector(vec.items().map(function (x) { return x * x; })).sum());
    };
    BanachSpace.prototype.lp = function (vec, p) {
        if (p == 0) {
            return 0;
        }
        return cbrtn(new Vector.Vector(vec.items().map(function (x) { return Math.pow(x, p); })).sum(), p);
    };
    BanachSpace.prototype.ln = function (vec) {
        return vec.max();
    };
    BanachSpace.prototype.bv = function (vec) {
        if (vec.size() == 1) {
            return Math.abs(vec.items()[0]);
        }
        var result = Math.abs(vec.items()[0]);
        var tmp = 0;
        var items = vec.items();
        for (var i = 0; i < vec.size() - 1; ++i) {
            tmp += Math.abs(items[i + 1] - items[i]);
        }
        return result + tmp;
    };
    return BanachSpace;
})();
exports.BanachSpace = BanachSpace;
var cbrtn = function (num, p) {
    return Math.pow(num, 1 / p);
};

var Category = (function () {
    //With construction of Category, apply identity element
    function Category(id) {
        this.id = id;
    }
    Category.prototype.apply = function (m, elems) {
    };
    return Category;
})();

//Combinations provides implementation of basic combinatorics formulas
var Combinations = (function () {
    function Combinations() {
    }
    //Binomial coefficient
    Combinations.prototype.binomial = function (n, k) {
        if (n < k) {
            return 0;
        }
        return factorial(n) / (factorial(k) * factorial(n - k));
    };
    Combinations.prototype.withoutRep = function (n, k) {
        if (n < k) {
            return 0;
        }
        return factorial(n) / factorial(n - k);
    };
    //Return n!
    Combinations.prototype.fact = function (n) {
        return factorial(n);
    };
    return Combinations;
})();
exports.Combinations = Combinations;
var factorial = function (n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    var result = 1;
    for (var i = 1; i <= n; ++i) {
        result *= i;
    }
    return result;
};

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
        else {
            return new None();
        }
    };
    Either.prototype.left = function (value) {
        return new Left(value);
    };
    Either.prototype.right = function (value) {
        return new Right(value);
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
var None = (function (_super) {
    __extends(None, _super);
    function None() {
        _super.call(this, 0);
    }
    return None;
})(Side);

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Ring_1 = require('./Ring');
var FieldNum = (function (_super) {
    __extends(FieldNum, _super);
    function FieldNum() {
        _super.call(this);
    }
    FieldNum.prototype.inverse = function (num) {
        if (num == 0) {
            throw new Error("number can't be equal to zero");
        }
        return 1 / num;
    };
    FieldNum.prototype.div = function (one, two) {
        if (two == 0) {
            throw new Error("second number, can't be equal to zero");
        }
        return one / two;
    };
    return FieldNum;
})(Ring_1.NumRing);
exports.FieldNum = FieldNum;
var QuadraticFieldNum = (function (_super) {
    __extends(QuadraticFieldNum, _super);
    function QuadraticFieldNum(n, a, b) {
        this.n = a + b * Math.sqrt(n);
        _super.call(this);
    }
    return QuadraticFieldNum;
})(Ring_1.NumRing);

//Basic functor for list
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

//Implementation of fuzzy sets
var FuzzySet = (function () {
    function FuzzySet(setdata, func) {
        this.func = func;
        this.setdata = setdata;
    }
    //This helpful method provides inner computations for intersection and union
    FuzzySet.prototype.compute = function (otherset, func) {
        var result = [];
        for (var i = 0; i < this.setdata.length; ++i) {
            result.push(func(this.setdata[i], otherset.apply(this.setdata[i])));
        }
        return result;
    };
    //Apply func ti the data
    FuzzySet.prototype.apply = function (x) {
        return this.func(x);
    };
    //Return intersection of two fuzzy sets
    FuzzySet.prototype.intersection = function (otherset) {
        return this.compute(otherset, Math.min);
    };
    //Return union of two fuzzy sets
    FuzzySet.prototype.union = function (otherset) {
        return this.compute(otherset, Math.max);
    };
    return FuzzySet;
})();
exports.FuzzySet = FuzzySet;
//Typical t-norms for fuzzy sets
var FuzzySetTNorms = (function () {
    function FuzzySetTNorms() {
    }
    FuzzySetTNorms.prototype.drastic = function (fs1, fs2, x) {
        if (Math.max(fs1.apply(x), fs2.apply(x)) == 1) {
            return Math.max(fs1.apply(x), fs2.apply(x));
        }
        return 0;
    };
    FuzzySetTNorms.prototype.bounded = function (fs1, fs2, x) {
        return Math.max(1, fs1.apply(x) + fs2.apply(x));
    };
    return FuzzySetTNorms;
})();

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Permutations_1 = require('./Permutations');
//Definition of group
//Group in general is finite group
var FiniteGroup = (function () {
    function FiniteGroup(elems) {
        this.elems = elems;
    }
    FiniteGroup.prototype.identity = function () {
        return 1;
    };
    FiniteGroup.prototype.elements = function () {
        return this.elems;
    };
    FiniteGroup.prototype.inv = function () {
        return 0;
    };
    FiniteGroup.prototype.plus = function (n1, n2) {
        if (!this.checkExist(n1) || !this.checkExist(n2)) {
            throw new Error("element is not on the group");
        }
        return (n1 + n2) % this.size();
    };
    FiniteGroup.prototype.size = function () {
        return this.elems.length;
    };
    //Checking if n contains in the elememnts
    FiniteGroup.prototype.checkExist = function (n) {
        return this.elems.indexOf(n) != -1;
    };
    FiniteGroup.prototype.coset = function (subgroup, element) {
        var values = subgroup.elements();
        if (!this.checkExist(element)) {
            throw new Error("element is not on the group");
        }
        var newelements = [];
        for (var i = 0; i < values.length; ++i) {
            newelements.push(this.plus(values[i], element));
        }
        return newelements;
    };
    //compare returns 1 if FiniteGroup values is greater, 0 if equal 
    //and -1 if r is greater
    FiniteGroup.prototype.compareBySize = function (group) {
        var size1 = this.size();
        var size2 = group.size();
        if (size1 > size2) {
            return 1;
        }
        else if (size1 == size2) {
            return 0;
        }
        else {
            return -1;
        }
    };
    return FiniteGroup;
})();
exports.FiniteGroup = FiniteGroup;
//SimpleGroup contains only negate
var SimpleGroup = (function (_super) {
    __extends(SimpleGroup, _super);
    function SimpleGroup(elems) {
        _super.call(this, elems);
    }
    SimpleGroup.prototype.negate = function () {
        return this.elems.map(function (x) { return -x; });
    };
    return SimpleGroup;
})(FiniteGroup);
exports.SimpleGroup = SimpleGroup;
//ConstantGroup is generalization of Trivial group and contains only one element
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
        var perm = new Permutations_1.Permutations(list);
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
    SymmetricGroup.prototype.is_complete = function () {
        if (this.degree >= 3 && this.degree <= 5) {
            return true;
        }
        else {
            return false;
        }
    };
    SymmetricGroup.prototype.is_abelian = function () {
        if (this.degree >= 3) {
            return true;
        }
        else {
            return false;
        }
    };
    return SymmetricGroup;
})();
exports.SymmetricGroup = SymmetricGroup;
//CyclicGroup contains cyclic elements
var CyclicGroup = (function () {
    function CyclicGroup(n) {
        this.n = n;
        var elems = range(n);
        this.items = generate(elems);
    }
    CyclicGroup.prototype.elements = function () {
        return this.items;
    };
    CyclicGroup.prototype.is_abelian = function () {
        return true;
    };
    return CyclicGroup;
})();
exports.CyclicGroup = CyclicGroup;
//Generated Group gets function for generating elements of the group
var GeneratedGroup = (function () {
    function GeneratedGroup(func) {
        this.func = func;
    }
    GeneratedGroup.prototype.generate = function (items) {
        if (items.length == 0) {
            return [0];
        }
        return items.map(this.func);
    };
    return GeneratedGroup;
})();
exports.GeneratedGroup = GeneratedGroup;
//http://www1.spms.ntu.edu.sg/~frederique/lecture9ws.pdf
var QuotientGroup = (function () {
    function QuotientGroup(items) {
        this.items = items;
    }
    QuotientGroup.prototype.compute = function (subgroup) {
    };
    return QuotientGroup;
})();
exports.QuotientGroup = QuotientGroup;
//https://en.wikipedia.org/wiki/Quaternion_group
var QuaternionGroup = (function () {
    function QuaternionGroup() {
    }
    return QuaternionGroup;
})();
exports.QuaternionGroup = QuaternionGroup;
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
function generate(items) {
    var cycle = items;
    cycle = cycle.concat(cycle.slice(0, items.length - 1));
    var result = [];
    items.forEach(function (x) {
        var tmp = [];
        for (var i = x; i < items.length + x; ++i) {
            tmp.push(cycle[i]);
        }
        result.push(tmp);
    });
    return result;
}
function range(n) {
    var result = [];
    for (var i = 0; i < n; ++i) {
        result.push(i);
    }
    return result;
}

var Util = require('./Utils');
//Matrix provides basic operations on matrix
var Matrix = (function () {
    function Matrix(item) {
        this.item = item;
    }
    Matrix.prototype.checks = function (elements) {
        if (this.item.length != elements.length) {
            throw new Error("Dimensions is not equal");
        }
        if (this.item[0].length != elements[0].length) {
            throw new Error("Dimensions is not equal");
        }
    };
    //add provides adding elements of two matrices
    Matrix.prototype.add = function (elements) {
        var _this = this;
        this.checks(elements);
        var result;
        result = Util.Utils.range(0, this.item.length).map(function (x) { return Util.Utils.range(0, _this.item.length); });
        for (var i = 0; i < this.item.length; ++i) {
            var tmp = Util.Utils.range(0, this.item[0].length);
            for (var j = 0; j < this.item[0].length; ++j) {
                tmp[j] = this.item[i][j] + elements[i][j];
            }
            result[i] = tmp;
        }
        return new Matrix(result);
    };
    //dot provides dot product
    Matrix.prototype.dot = function (elements) {
        var result;
        result = Util.Utils.zeros(this.item.length).map(function (x) { return Util.Utils.zeros(elements.length); });
        for (var i = 0; i < this.item.length; ++i) {
            for (var j = 0; j < elements.length; ++j) {
                for (var k = 0; k < elements[0].length; ++k) {
                    result[i][j] = result[i][j] + this.item[i][k] * elements[j][k];
                }
            }
        }
        return new Matrix(result);
    };
    //items provides returns current elements
    Matrix.prototype.items = function () {
        return this.item;
    };
    //shape provides shape of current elements
    Matrix.prototype.shape = function () {
        var first = this.item.length;
        var second = this.item[0].length;
        return [first, second];
    };
    return Matrix;
})();
exports.Matrix = Matrix;

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
        args.forEach(function (x) {
            result += _this.mult(x);
        });
        return new MonoidNumber(this.mult, result);
    };
    return MonoidNumber;
})();
exports.MonoidNumber = MonoidNumber;
var MonoidList = (function () {
    function MonoidList(data) {
        this.data = data;
        this.zero = [];
        this.data = data;
    }
    MonoidList.prototype.mempty = function () {
        return new MonoidList(this.zero);
    };
    MonoidList.prototype.mappend = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var result = this.zero;
        args.forEach(function (x) {
            result.concat(x);
        });
        return new MonoidList(result);
    };
    return MonoidList;
})();
exports.MonoidList = MonoidList;
var MonoidString = (function () {
    function MonoidString(data) {
        this.data = data;
        this.zero = "";
        this.data = data;
    }
    MonoidString.prototype.mempty = function () {
        return new MonoidString(this.zero);
    };
    MonoidString.prototype.mappend = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var result = this.zero;
        args.forEach(function (x) {
            result += x;
        });
        return new MonoidString(result);
    };
    return MonoidString;
})();
exports.MonoidString = MonoidString;

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
var PermutationsNum = (function (_super) {
    __extends(PermutationsNum, _super);
    function PermutationsNum(elements) {
        _super.call(this, elements);
        this.elements = elements;
    }
    //Return permutation support
    //This method return sorted list of elements
    //where p_i != i
    PermutationsNum.prototype.support = function () {
        var result = [];
        for (var i = 0; i < this.elements.length; ++i) {
            if (this.elements[i] != i + 1) {
                result.push(this.elements[i]);
            }
        }
        return result.sort();
    };
    return PermutationsNum;
})(Permutations);
exports.PermutationsNum = PermutationsNum;
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

var Quasigroup = (function () {
    function Quasigroup(data) {
        this.data = data;
    }
    return Quasigroup;
})();
exports.Quasigroup = Quasigroup;

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Semigroup = require('./Semigroup');
var Util = require('./Utils');
var NumRing = (function (_super) {
    __extends(NumRing, _super);
    function NumRing() {
        _super.call(this);
        this.zero = 0;
        this.one = 1;
    }
    NumRing.prototype.plus = function (one, second) {
        return one + second;
    };
    NumRing.prototype.multiply = function (one, second) {
        return one * second;
    };
    //For Z, Q and R is always commutative
    NumRing.prototype.is_commutative = function (one, second) {
        return true;
    };
    return NumRing;
})(Semigroup.SemigroupNumber);
exports.NumRing = NumRing;
//MatrixRing provides implementation of operations of Rings applys to matrix
var MatrixRing = (function () {
    function MatrixRing() {
    }
    MatrixRing.prototype.plus = function (one, second) {
        return one.add(second.items());
    };
    MatrixRing.prototype.multiply = function (one, second) {
        return one.dot(second.items());
    };
    //Return true is one * second = second * one
    MatrixRing.prototype.is_commutative = function (one, second) {
        var first_result = one.dot(second.items());
        var second_result = second.dot(one.items());
        return Util.Utils.equal(first_result.items(), second_result.items());
    };
    return MatrixRing;
})();
exports.MatrixRing = MatrixRing;

//Example semigroup with natural numbers
var SemigroupNumber = (function () {
    function SemigroupNumber() {
    }
    SemigroupNumber.prototype.product = function (n1, n2) {
    };
    SemigroupNumber.prototype.plus = function (n1, n2) {
        if (n1 > 0 && n2 > 0) {
            return n1 + n2;
        }
    };
    //inverse of element n
    SemigroupNumber.prototype.inv = function (n) {
        return Math.pow(n, -1);
    };
    //Simple generation of set
    SemigroupNumber.prototype.generate = function (func, limit) {
        var result = [];
        for (var i = 0; i < limit; ++i) {
            result.push(func(i));
        }
        return result;
    };
    return SemigroupNumber;
})();
exports.SemigroupNumber = SemigroupNumber;

//SemiringBool implements boolmean operations based on Semiring
var SemiringBool = (function () {
    function SemiringBool(elem) {
        this.elem = elem;
    }
    SemiringBool.prototype.zero = function () {
        return false;
    };
    SemiringBool.prototype.one = function () {
        return true;
    };
    SemiringBool.prototype.plus = function (one) {
        return this.elem || one;
    };
    SemiringBool.prototype.mult = function (one) {
        return this.elem && one;
    };
    return SemiringBool;
})();
exports.SemiringBool = SemiringBool;

var Set = (function () {
    function Set(values) {
        this.values = values;
    }
    //product of two sets
    Set.prototype.product = function (otherset) {
        return this.values.map(function (x) { return otherset.items().map(function (y) { return (x, y); }); });
    };
    //A /^\ B = {x : x in A and x in B}
    Set.prototype.intersection = function (otherset) {
        var _this = this;
        return this.filteri(otherset, (function (x) { return _this.values.indexOf(x) != -1; }));
    };
    //A \ B = {x : x in A and x not in B}
    Set.prototype.difference = function (otherset) {
        var _this = this;
        var items = otherset.items();
        return this.filteri(otherset, (function (x) { return _this.values.indexOf(x) == -1; }));
    };
    //A (+) B = {x : x in A or x in B but not both}
    Set.prototype.sim_difference = function (otherset) {
        var _this = this;
        var items = otherset.items();
        return new Set(items.filter(function (x) { return (_this.values.indexOf(x) != -1
            || items.indexOf(x) != -1) && !(items.indexOf(x) != -1 && _this.values.indexOf(x) != -1); }));
    };
    //items returns items 
    Set.prototype.items = function () {
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
    Set.prototype.filteri = function (otherset, func) {
        var items = otherset.items();
        return new Set(items.filter(func));
    };
    return Set;
})();
exports.Set = Set;

var Utils;
(function (Utils) {
    function power(x, n) {
        var result = 1.0;
        while (n != 0) {
            if (n % 2 != 0) {
                result *= x;
                n -= 1;
            }
            x *= x;
            n /= 2;
        }
        return result;
    }
    Utils.power = power;
    function mod_power(g, p, mod) {
        var result = 1.0;
        g = g % mod;
        while (p > 0) {
            if (p % 2 == 1) {
                result = (result * g) % mod;
            }
            p = p >> 1;
            g = (g * g) % mod;
        }
        return result;
    }
    Utils.mod_power = mod_power;
    function range(start, end) {
        var result = [];
        for (var i = start; i < end; ++i) {
            result.push(i);
        }
        return result;
    }
    Utils.range = range;
    function zeros(num) {
        var result = [];
        for (var i = 0; i < num; ++i) {
            result.push(0);
        }
        return result;
    }
    Utils.zeros = zeros;
    function equal(item1, item2) {
        if (item1.length != item2.length) {
            return false;
        }
        if (item1[0].length != item2[0].length) {
            return false;
        }
        for (var i = 0; i < item1.length; ++i) {
            for (var j = 0; j < item1[0].length; ++j) {
                if (item1[i][j] != item2[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }
    Utils.equal = equal;
})(Utils = exports.Utils || (exports.Utils = {}));

var Util = require('./Utils');
var Vector = (function () {
    function Vector(elements) {
        this.elements = elements;
    }
    Vector.prototype.add = function (elements) {
        var _this = this;
        if (this.elements.length == elements.length) {
            return new Vector(Util.Utils.range(0, this.elements.length).map(function (x) {
                return _this.elements[x] + elements[x];
            }));
        }
        return new Vector([]);
    };
    Vector.prototype.sub = function (elements) {
        var _this = this;
        if (this.elements.length == elements.length) {
            return new Vector(Util.Utils.range(0, this.elements.length).map(function (x) {
                return _this.elements[x] - elements[x];
            }));
        }
        return new Vector([]);
    };
    Vector.prototype.dot = function (elements) {
        var _this = this;
        if (this.elements.length == elements.length) {
            return Util.Utils.range(0, this.elements.length + 1).reduce(function (x, y) {
                return _this.elements[y - 1] * elements[y - 1] + x;
            });
        }
        throw new Error("Length of two vectors must be equal");
    };
    Vector.prototype.sum = function () {
        return this.elements.reduce(function (x, y) { return x + y; });
    };
    Vector.prototype.items = function () {
        return this.elements;
    };
    Vector.prototype.mean = function () {
        var datasum = this.sum();
        var itemslen = this.elements.length;
        return datasum / itemslen;
    };
    Vector.prototype.max = function () {
        var itemslen = this.elements.length;
        if (itemslen == 0) {
            return 0;
        }
        var maxvalue = 0;
        this.elements.forEach(function (x) {
            if (x > maxvalue) {
                maxvalue = x;
            }
        });
        return maxvalue;
    };
    Vector.prototype.size = function () {
        return this.elements.length;
    };
    return Vector;
})();
exports.Vector = Vector;
