import Abstract = require('./Abstract');
import permutations = require('./Permutations');

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

//Construct symmetric group
/*Symmetric group
degree provides number of permutations with degree!
For example if degree = 4, this is S4 group
http://groupprops.subwiki.org/wiki/Symmetric_group:S4
*/
export class SymmetricGroup{
    private degree: number;
    private elements: number[][];
    private ordernum: number

    private constructElements(degree: number): number[][] {
        var list:Array<number> = [];
        for(let i = 0;i < degree;++i){
            list.push(i);
        }

        let perm = new permutations.Permutations<number>(list);
        this.ordernum = perm.total_num_of_permutations();
        return perm.all_permutations();
    }
    constructor(degree: number) {
        this.degree = degree;
        //console.log(new Permutations.Permutations([1,2,3]));
        this.elements = this.constructElements(degree);
    }

    order(): number {
        return this.ordernum;
    }
}

