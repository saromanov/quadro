class IGroup<T> {
	constructor(elems:T[]) {
		
	}
}

export class Group<T> extends IGroup<T> {
    constructor(elems: T[]){
    	super(elems);
    }

    //Return true is group is abelian
    isAbelian():boolean {
    	return true
    }
}
