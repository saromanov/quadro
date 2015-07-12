
interface Ring<T> {
	add(one:T, second:T):T
	multiply(one:T, second:T)
}

export class NumRing implements Ring<number> {
	private zero:number;
	private one:number;
	constructor(){
		this.zero = 0;
		this.one = 1;
	}

	add(one:number, second:number){
		return one + second
	}

	multiply(one:number, second: number){
		return one * second
	}
}