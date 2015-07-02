class Option{
	protected item:any;
	constructor(item:any) {
		this.item = item;
	}
}

export class Some extends Option{
	constructor(item:any) {
		super(item);
	}
}

export class None extends Option{
	constructor(){
		super(null);
	}
}