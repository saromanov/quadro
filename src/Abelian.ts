
//Construct abelian group
export class Abelian {
	protected elements: number[];
	constructor(public elems: number[]){
		this.elements = elems;
	}

	get_elements():number[] {
		return this.elements;
	}

	is_commutativity(item1:number, item2:number): boolean {
		return item1 * item2 == item2 * item1
	}
}