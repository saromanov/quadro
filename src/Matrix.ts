import Util = require('./Utils')

export {Matrix};


//Matrix provides basic operations on matrix
class Matrix {
	private item: number[][];
	constructor(item: number[][]) {
		this.item = item;
	}

	private checks(elements: number[][]) {
		if(this.item.length != elements.length) {
			throw new Error("Dimensions is not equal");
		}

		if(this.item[0].length != elements[0].length) {
			throw new Error("Dimensions is not equal");
		}

	}

	//add provides adding elements of two matrices
	add(elements: number[][]):Matrix {
		this.checks(elements);
		var result: number[][];
		result = Util.Utils.range(0, this.item.length).map(x => Util.Utils.range(0, this.item.length));
		for(let i = 0;i < this.item.length;++i) {
			let tmp = Util.Utils.range(0, this.item[0].length);
			for(let j = 0;j < this.item[0].length;++j) {
				tmp[j] = this.item[i][j] + elements[i][j];
			}

			result[i] = tmp;
		}

		return new Matrix(result);
	}

	//dot provides dot product
	dot(elements: number[][]): Matrix {
		var result: number[][];
		result = Util.Utils.zeros(this.item.length).map(x => Util.Utils.zeros(elements.length));
		for(let i = 0;i < this.item.length;++i) {
			for(let j= 0;j < elements.length;++j) {
				for(let k = 0;k < elements[0].length;++k) {
					result[i][j] = result[i][j] + this.item[i][k] * elements[j][k];
				}
			}
		}
		return new Matrix(result);
	}

	//items provides returns current elements
	items(): number[][] {
		return this.item;
	}

	//shape provides shape of current elements
	shape(): number[] {
		let first = this.item.length;
		let second = this.item[0].length;
		return [first, second];
	}

}