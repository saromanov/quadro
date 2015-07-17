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

	items():number[] {
		return this.elements;
	}
}