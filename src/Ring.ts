import Semigroup = require('./Semigroup');
import {Matrix} from './Matrix';
import Util = require('./Utils');
export {Ring, NumRing, MatrixRing};

interface Ring<T> {
	plus(one:T, second:T):T;
	multiply(one:T, second:T);
	is_commutative(one:T, second:T);
}

class NumRing extends Semigroup.SemigroupNumber implements Ring<number>{
	private zero:number;
	private one:number;
	constructor(){
		super();
		this.zero = 0;
		this.one = 1;
	}

	plus(one:number, second:number){
		return one + second;
	}

	multiply(one:number, second: number){
		return one * second;
	}

	//For Z, Q and R is always commutative
	is_commutative(one:number, second:number) {
		return true;
	}

}

//MatrixRing provides implementation of operations of Rings applys to matrix
class MatrixRing implements Ring<Matrix> {
	private zero: number[][];
	constructor() {
	}

	plus(one: Matrix, second:Matrix):Matrix {
		return one.add(second.items());
	}

	multiply(one:Matrix, second: Matrix): Matrix {
		return one.dot(second.items());
	}

	//Return true is one * second = second * one
	is_commutative(one: Matrix, second: Matrix):boolean {
		let first_result = one.dot(second.items());
		let second_result = second.dot(one.items());
		return Util.Utils.equal(first_result.items(), second_result.items());
	}
}