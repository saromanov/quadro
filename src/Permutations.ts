export class Permutations<T> {
	protected elements: T[];
	constructor(elems:T[]) {
		this.elements = elems;
	}

	output(): T[] {
		return Heap_gen(this.elements, this.elements.length);
	}

	multiply(elems: T[]) {

	}
}


function Heap_gen<T>(elements: T[], num:number): T[] {
	if(num <= 1){
		return elements;
	}
	for(var i = 0;i < num-1;++i) {
		Heap_gen(elements, num-1);
		if(num % 2 == 0) {
			var res = swap(elements[i], elements[num-1]);
			elements[i] = res[0];
			elements[num-1] = res[1];
		} else {
			var res = swap(elements[0], elements[num-1]);
			elements[0] = res[0];
			elements[num-1] = res[1];
		}
	}

	return Heap_gen(elements, num-1);
}

function swap<T>(elem1: T, elem2: T): T[] {
	var tmp = elem2;
	elem2 = elem1;
	elem1 = tmp;
	return [elem1, elem2];
}