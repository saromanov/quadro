class ZeroItem<T> {
    private zero :T;
	constructor(zero ?:T) {
		this.zero = zero;
	}
}

export interface Monoid<T> {
    mempty():Monoid<T>
    mappend(...args:T[]): Monoid<T>
}


export class MonoidNumber implements Monoid<number>{
    private mult: (a:number) => number;
    private zero: number = 0;
    constructor(mult: (a:number) => number, private data?:number) {
        this.mult = mult;
        this.data = data;
    }
    mempty(): Monoid<number> {
        return new MonoidNumber(this.mult, this.zero);
    }

    mappend(...args:number[]): Monoid<number> {
        let result = this.zero;
        console.log(this.data)
        args.forEach(x => {
            result += this.mult(x);
        });

        return new MonoidNumber(this.mult, result);
    }
}

