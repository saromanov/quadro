export {Semiring, SemiringBool};

interface Semiring<T> {
	zero():T;
	one():T;

	//Addition operation
	plus(one:T):T;

	//multiplication operation
	mult(one:T);
}


//SemiringBool implements boolmean operations based on Semiring
class SemiringBool implements Semiring<boolean> {
	private elem:boolean;

	constructor(elem:boolean) {
		this.elem = elem;
	}

	zero():boolean {
		return false;
	}

	one():boolean {
		return true;
	}

	plus(one:boolean): boolean {
		return this.elem || one;
	}

	mult(one:boolean): boolean {
		return this.elem && one;
	}
}
