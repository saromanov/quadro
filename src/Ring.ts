
interface Ring<T> {
	add(one:T, second:T):T
	multiply(one:T, second:T)
}

class NumRing implements Ring<number> {
	constructor(){

	}

	add(one:number, second:number){
		return one + second
	}

	multiply(one:number, second: number){
		return one * second
	}
}