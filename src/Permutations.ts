export class Permutations<T> {
	protected elements: T[];
	constructor(elems:T[]) {
		this.elements = elems;
	}

	perm(num?:number): T[] {
		var permnum = num || this.elements.length;
		return Heap_gen(this.elements, permnum);
	}

	output_with_repetition(num?:number): T[] {
		var vec = rand_vector(this.elements.length, this.elements.length-1);
		return vec.map(x => this.elements[x]);
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

function rand_vector(num: number, bound: number):number[] {
	var res = [];
	for(var i = 0;i < num;++i) {
		res.push(Math.floor((Math.random() * bound) + 1)); 
	}
	return res;
}