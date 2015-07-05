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
