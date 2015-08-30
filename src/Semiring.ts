export {Semiring, SemiringBool};

interface Semiring<T> {
	zero():T;
	one():T;
	plus(one:T):T;
	dot(one:T);
}

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

	dot(one:boolean): boolean {
		return this.elem && one;
	}
}
