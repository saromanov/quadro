
//Combinations provides implementation of basic combinatorics formulas
export class Combinations {
	//Binomial coefficient
	binomial(n:number, k:number): number{
		if(n < k){
			return 0;
		}
		return factorial(n)/(factorial(k) * factorial(n - k))
	}

	withoutRep(n:number, k:number):number{
		if(n < k){
			return 0;
		}

		return factorial(n)/factorial(n - k);
	}

	//Return n!
	fact(n:number): number {
		return factorial(n);
	}


}

var factorial = function(n:number){
	if(n == 0){
		return 0
	}

	if(n == 1){
		return 1
	}

	let result = 1;
	for(let i = 1;i <= n;++i){
		result *= i;
	}
	return result;
}