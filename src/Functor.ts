export class Functor<T, Y>{
    protected elements: T[];
    constructor (elems: T[]){
        this.elements = elems;
    }
    fmap(func:(A:T) => Y): Y[]{
       return this.elements.map(func)
    }

    fmap2(func:(A:T) => Y, func2:(A:Y) => Y): Y[]{
    	return this.elements.map(func).map(func2)
    }

    fmapN(X: T, ... func:((A:T) => T)[]): T {
    	var start = func[0](X);
    	for (var i = 1;i < func.length;++i) {
    		start = func[i](start);
    	}

    	return start
    }

    output(): T[] {
        return this.elements;
    }
 }
