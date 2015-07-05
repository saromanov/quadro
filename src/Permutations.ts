import model= require('./Abstract')

export class Permutations<T> extends model.ElementModel<T>{
	protected elements: T[];
	constructor(elems:T[]) {
		super(elems);
	}

	//Single permutation of elements
	perm(num?:number): Permutations<T> {
		let permnum = num || this.elements.length;
		return new Permutations(this.elements);
	}

	//return list of all permutations
	all_permutations(): T[][]{
		let total = total_number_of_permutations(this.elements.length);
		var results:T[][] = [];
		let permHeap = (elements: T[], num: number) => {
			if(num == 1){
				results.push(elements.slice(0));
			}
			for(var i = 0;i < num;++i) {
				permHeap(elements, num-1);
				if(num % 2 == 0) {
					let tmp = elements[i];
					elements[i] = elements[num-1];
					elements[num-1] = tmp;
				} else {
					let tmp = elements[0];
					elements[0] = elements[num-1];
					elements[num-1] = tmp;
				}
			}

		}
		permHeap(this.elements, this.elements.length);
		return results;
	}

	total_num_of_permutations():number {
		return total_number_of_permutations(this.elements.length);
	}

	output_with_repetition(num?:number): Permutations<T> {
		let vec = rand_vector(this.elements.length, this.elements.length-1);
		return new Permutations(vec.map(x => this.elements[x]));
	}

	multiply(elems: T[]) {
		let result = [];
		for(let i = 0;i < this.elements.length;++i){
			result.push(this.elements[i]);
		}

		for(let i = 0;i < elems.length;++i) {
			if(result.indexOf(elems[i]) == -1) {
				result.push(elems[i]);
			}
		}

		return new Permutations(result);
	}
}

function rand_vector(num: number, bound: number):number[] {
	let res = [];
	for(let i = 0;i < num;++i) {
		res.push(Math.floor((Math.random() * bound) + 1)); 
	}
	return res;
}

function total_number_of_permutations(num:number): number {
	let result: number = 1;
	for(let i = 1;i <= num;++i) {
		result*= i;
	}

	return result;
}