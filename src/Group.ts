
//Definition of group
export class Group{
    protected elements: number[];
    constructor(elems: number[]){
    	this.elements = elems;
    }
}

export class SimpleGroup extends Group{
    constructor(elems: number[]) {
        super(elems);
    }

    negate(): number[] {
        return this.elements.map(x => -x);
    }
}


//ConstantGroup is generalization of Trivial group
export class ConstantGroup{
    private element: number
    constructor(element: number) {
        this.element = element;
    }

    output(){
        return this.element;
    }
}
