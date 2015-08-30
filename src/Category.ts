import Monoid = require('./Monoid');


class Category<T> {
	private id:T;
	//With construction of Category, apply identity element
	constructor(id: T) {
		this.id = id;
	}

	apply(m:Monoid.Monoid<T>, elems:T) {

	}
}