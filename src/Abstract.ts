export class ElementModel<T> {
	protected elements: T[];
	constructor(elems: T[]){
		this.elements = elems;
	}

	output():T[]{
		return this.elements;
	}
}