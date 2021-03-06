export class Either<L, R> {
	private leftvalue: L;
	private rightvalue: R;
	constructor(l:L, r:R) {
		this.leftvalue = l;
		this.rightvalue = r;
	}

	check(side: string, value: any):Side<any> {
		if(side == "left" && typeof value == typeof this.leftvalue) {
			return new Left(value);
		}

		if(side == "right" && typeof value == typeof this.rightvalue) {
			return new Right(value);
		}

		else {
			return new None();
		}
	}

	left(value:L):Side<L>{
		return new Left<L>(value);
	}

	right(value:R):Side<R>{
		return new Right<R>(value);
	}
}


class Side<T> {
	constructor(item:T) {}
	public name:string = "";
}

class Right<T> extends Side<T>{
	public item: T;
	public name:string = "right";
	constructor(item:T) {
		super(item);
		this.item = item;
	}
}

class Left<T> extends Side<T> {
	public item: T;
	public name:string = "left";
	constructor(item:T) {
		super(item);
		this.item = item;
	}
}

class None extends Side<number> {
	constructor () {
		super(0);
	}
}