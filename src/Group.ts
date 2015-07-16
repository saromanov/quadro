import Abstract = require('./Abstract');
import permutations = require('./Permutations');
import Quasigroup = require('./Quasigroup')

//Definition of group
export class Group extends Quasigroup.Quasigroup<number> {
    protected elements: number[];
    constructor(elems: number[]){
    	this.elements = elems;
        super(elems)
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
    private items: number[][];
    private ordernum: number;
    private listelements: number[];

    private constructElements(degree: number): number[][] {
        var list:Array<number> = [];
        for(let i = 1;i <= degree;++i){
            list.push(i);
        }

        let perm = new permutations.Permutations<number>(list);
        this.ordernum = perm.total_num_of_permutations();
        this.listelements = list;
        return perm.all_permutations();
    }
    constructor(degree: number) {
        this.degree = degree;
        //console.log(new Permutations.Permutations([1,2,3]));
        this.items = this.constructElements(degree);
    }

    order(): number {
        return this.ordernum;
    }

    //Exponent of the group
    exponent(): number {
        let item = lcm(this.listelements[0],this.listelements[1]);
        for (let i = 2; i < this.listelements.length;++i) {
            item = lcm(item, this.listelements[i]);
        }
        return item;
    }

    elements(): number[][] {
        return this.items;
    }

    is_complete():boolean {
        if(this.degree >=3 && this.degree <= 5) {
            return true;
        }
         else {
            return false;
         }
    }
}

export class CyclicGroup {
    private n: number;
    private items: number[][];
    constructor(n: number){
        this.n = n;
        let elems = range(n);
        this.items = generate(elems);
    }

    elements(): number[][] {
        return this.items;
    }

    is_abelian():boolean {
        return true;
    }
}

//https://en.wikipedia.org/wiki/Quaternion_group
export class QuaternionGroup {
    private items: string[];
    constructor(){

    }
}

function lcm(num1: number, num2: number): number {
    return num1 * num2/gcd(num1, num2);
}

function gcd(num1: number, num2: number): number {
    if(num1 == undefined || num2 == undefined){
        return 0;
    }
    let tmp: number;
    while(num1 != 0) {
        tmp = num1;
        num1 = num2 % num1;
        num2 = tmp;
    }
    return num2;
}

function generate(items: number[]): number[][] {
    let cycle = items;
    cycle = cycle.concat(cycle.slice(0, items.length-1));
    let result = [];
    items.forEach(x => {
        let tmp = [];
        for(let i = x;i < items.length+x;++i) {
            tmp.push(cycle[i]);
        }
        result.push(tmp);
    });

    return result;
}

function range(n:number): number[] {
    let result = [];
    for(let i = 0;i < n;++i) {
        result.push(i);
    }
    return result;
}
