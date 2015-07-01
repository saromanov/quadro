# quadro

Work in progress

## Usage

### Permutations
Simple permutation

```javascript
var perm = new quadro.Permutations([7,4,5,8]);
console.log(perm.perm().output()); //[ 4, 5, 8, 7 ]
```

Permutations with repetitions
```javascript
var perm = new quadro.Permutations([7,4,5,8]);
console.log(perm.output_with_repetition().output()); //[ 7, 8, 7, 5 ]
```

Multiplication of permutations
```javascript
var perm = new quadro.Permutations([7,4,5,8]);
console.log(perm.multiply([2,1,9]).output()); //[ 7, 4, 5, 8, 2, 1, 9 ]
```
