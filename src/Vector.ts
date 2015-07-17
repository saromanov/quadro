import Util = require('./Utils')

export class Vector{
	private elements: number[];
	constructor(elements: number[]){
		this.elements = elements
	}

	add(elements: number[]): Vector{
		if(this.elements.length == elements.length){
			return new Vector(Util.Utils.range(0, this.elements.length).map(x => 
				this.elements[x] + elements[x]))
		}
	}

	sub(elements: number[]): Vector {
		if(this.elements.length == elements.length){
			return new Vector(Util.Utils.range(0, this.elements.length).map(x => 
				this.elements[x] - elements[x]))
		}
	}

	sum(): number{
		return this.elements.reduce((x, y) => x + y);
	}

	items():number[] {
		return this.elements;
	}
}