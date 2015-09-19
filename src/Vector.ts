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
		return new Vector([]);
	}

	sub(elements: number[]): Vector {
		if(this.elements.length == elements.length){
			return new Vector(Util.Utils.range(0, this.elements.length).map(x => 
				this.elements[x] - elements[x]))
		}
		return new Vector([]);
	}

	dot(elements: number[]): number {
		if(this.elements.length == elements.length) {
			return Util.Utils.range(0, this.elements.length+1).reduce((x,y) => { 
				return this.elements[y-1] * elements[y-1] + x;
		    })
		}

		throw new Error("Length of two vectors must be equal");
	}

	sum(): number{
		return this.elements.reduce((x, y) => x + y);
	}

	items():number[] {
		return this.elements;
	}

	mean(): number {
		const datasum = this.sum();
		const itemslen = this.elements.length;
		return datasum/itemslen;
	}

	max(): number {
		const itemslen = this.elements.length;
		if(itemslen == 0) {
			return 0;
		}

		let maxvalue = 0;
		this.elements.forEach(x => {
			if(x > maxvalue) {
				maxvalue = x;
			}
		});

		return maxvalue;
	}

	size(): number {
		return this.elements.length;
	}
}