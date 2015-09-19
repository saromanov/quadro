import Vector = require('./Vector');

//Norms in Banach space
//https://en.wikipedia.org/wiki/List_of_Banach_spaces
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
}

var cbrtn = function(num: number, p:number): number{
	return Math.pow(num,1/p)
}