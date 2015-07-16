
//Construct abelian group
export class AbelianGroup<T> {
	protected elements: T[];
	constructor(public elems: T[]){
		this.elements = elems;
	}

	get_elements():T[] {
		return this.elements;
	}

	plus(elements: T[]){
		if(elements.length == 0){
			return
		}
		for(let i = 0;i < elements.length;++i){
			this.elements.push(elements[i]);
		}
	}
}
