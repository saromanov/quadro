
//Construct abelian group
export class AbelianGroup<T> {
	protected elements: T[];
	constructor(public elems: T[]){
		this.elements = elems;
	}

	get_elements():T[] {
		return this.elements;
	}
}
