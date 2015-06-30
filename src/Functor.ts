export class Functor<T, Y>{

    constructor (){}
    fmap(X:T[], func:(A:T) => Y): Y[]{
       return X.map(func)
    }

    fmap2(X:T[], func:(A:T) => Y, func2:(A:Y) => Y): Y[]{
    	return X.map(func).map(func2)
    }

    fmapN(X: T, ... func:((A:T) => T)[]): T {
    	var start = func[0](X);
    	for (var i = 1;i < func.length;++i) {
    		start = func[i](start);
    	}

    	return start
    }
 }
