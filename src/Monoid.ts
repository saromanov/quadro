class ZeroItem<T> {
    private zero :T;
	constructor(zero ?:T) {
		this.zero = zero;
	}
}

export class Monoid<T>{
    protected values:T[]
    constructor(values:T[]){
        this.values = values;
    }
    zero():ZeroItem<T> {
        return new ZeroItem<T>();
    }

    multiply(item:T):Monoid<T> {
        return new Monoid(this.values.concat(item));
    }

    result():T[] {
    	return this.values;
    }
}
