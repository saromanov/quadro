import Semigroup = require('./Semigroup');
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