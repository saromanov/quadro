# quadro

Work in progress

## Usage

### Permutations
Single permutation

```javascript
var perm = new quadro.Permutations([7,4,5,8]);
console.log(perm.perm().output()); //[ 4, 5, 8, 7 ]
```

Permutations with repetitions
```javascript
var perm = new quadro.Permutations([7,4,5,8]);
console.log(perm.output_with_repetition().output()); //[ 7, 8, 7, 5 ]
```

All possible permutations
```javascript
var perm = new quadro.Permutations([7,4,5,8]);
console.log(perm.all_permutations());
/*[ [ 5, 8, 7, 4 ],
  [ 8, 5, 7, 4 ],
  [ 7, 5, 8, 4 ],
  [ 5, 7, 8, 4 ],
  ...
*/
```

Multiplication of permutations
```javascript
var perm = new quadro.Permutations([7,4,5,8]);
console.log(perm.multiply([2,1,9]).output()); //[ 7, 4, 5, 8, 2, 1, 9 ]
```

### Groups
Symmetric group
```javascript
//Construct S4 group
var symm4 = new quadro.SymmetricGroup(4);
console.log(symm4.order()); //6
console.log(symm4.exponent()); //6
```

* Abelian group
* Constant group
* SymmetricGroup
* CyclicGroup


### Monoids
Monoid number
```javascript
var monoidnum = new quadro.MonoidNumber(function(x){return x;});
monoidnum.mappend(4,7,5);
```

Monoid List
```javascript
var monoidlist = new quadro.MonoidNumber();
monoidnum.mappend([1,2,3],[4,5,6]);//[1,2,3,4,5,6]
```

Monoid String
```javascript
var monoidstring = new quadro.MonoidString();
monoidstring.mappend("abc", "def"); //"abcdef"
```

### Either


## Combinations
Basic formulas from combinatorics

Binomial coefficient:
```javascript
var combi = new quadro.Combinations();
combi.binomial(7,2); //21
```

## Vector
```javascript
var vector = new quadro.Vector([1,2,4,5]);
console.log(vector.add([5,4,7,8]));
console.log(vector.sub([5,4,7,8]));
```

## Utils
fast exponentiation
```javascript
console.log(quadro.Utils.power(5,4)); //625
```
Modular exponentiation
```javascript
console.log(quadro.Utils.mod_power(4,13,497)); //445