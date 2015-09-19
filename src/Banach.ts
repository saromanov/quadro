import Vector = require('./Vector');

//Norms in Banach space
//https://en.wikipedia.org/wiki/List_of_Banach_spaces
// This class provides implementation of norms
export class BanachSpace{
	constructor(){

	}

	euclidean(vec: Vector.Vector): number{
		return Math.sqrt(new Vector.Vector(vec.items().map(x => x * x)).sum());
	}

	lp(vec: Vector.Vector, p:number): number {
		if(p == 0){
			return 0;
		}
		return cbrtn(new Vector.Vector(vec.items().map(x => Math.pow(x, p))).sum(), p);
	}

	ln(vec: Vector.Vector): number {
		return vec.max();
	}

	bv(vec: Vector.Vector): number {
		if(vec.size() == 1) {
			return Math.abs(vec.items()[0]);
		}

		let result = Math.abs(vec.items()[0]);
		let tmp = 0;
		let items = vec.items();
		for(let i = 0;i < vec.size()-1;++i) {
			tmp += Math.abs(items[i+1] - items[i]);
		}

		return result + tmp;
	}
}

var cbrtn = function(num: number, p:number): number{
	return Math.pow(num,1/p)
}