import {NumRing} from './Ring'
export {FieldNum}


class FieldNum extends NumRing {
	constructor() {
		super();
	}

	div(one:number, two:number) {
		if(two == 0) {
			throw new Error("second number, can't be equal to zero");
		}
		return one/two;
	}
}