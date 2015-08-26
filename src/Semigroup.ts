
//Example semigroup with natural numbers
export class SemigroupNumber {
	constructor() {

	}

	product(n1:number, n2:number){

	}

	plus(n1:number, n2:number): number{
		if(n1 > 0 && n2 > 0){
			return n1 + n2;
		}
	}

	//inverse of element n
	inv(n: number): number {
		return Math.pow(n, -1);
	}

	//Simple generation of set
	generate(func:(A:number) => number, limit: number){
		let result = [];
		for(let i = 0;i < limit;++i) {
			result.push(func(i));
		}
		return result;
	}
}