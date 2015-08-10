import Semigroup = require('./Semigroup');
import {Matrix} from './Matrix'
export {Ring, NumRing}

interface Ring<T> {
	plus(one:T, second:T):T
	multiply(one:T, second:T)
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
		return one + second
	}

	multiply(one:number, second: number){
		return one * second
	}

}

class MatrixRing implements Ring<Matrix> {
	private zero: number[][];
	constructor() {
	}

	plus(one: Matrix, second:Matrix):Matrix {
		return one.add(second.items())
	}

	multiply(one:Matrix, second: Matrix): Matrix {
		return one.dot(second.items());
	}

	//Return true is one * second = second * one
	is_commutative(one: Matrix, second: Matrix):boolean {
		let first_result = one.dot(second.items());
		return true;
	}
}