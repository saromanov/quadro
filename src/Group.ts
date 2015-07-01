export class Group{
    private elements: number[];
    constructor(elems: number[]){
    	this.elements = elems;
    }

    negate(): number[] {
        return this.elements.map(x => -x);
    }
}
