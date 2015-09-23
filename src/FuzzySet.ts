
//Implementation of fuzzy sets
class FuzzySet {
	private func:((A:number) => number);
	private setdata: number[];
	constructor(setdata:number[], func:((A:number) => number)) {
		this.func = func;
		this.setdata = setdata;
	}

	//Apply func ti the data
	apply(x: number): number {
		return this.func(x);
	}

	//Return intersection of two fuzzy sets
	intersection(otherset: FuzzySet) {
		let result = [];
		for(let i = 0;i < this.setdata.length;++i) {
			result.push(Math.min(this.func(this.setdata[i]), otherset.apply(this.setdata[i])));
		}
		return result;
	}
}


//Typical t-norms for fuzzy sets
class FuzzySetTNorms {
	constructor() {

	}

	drastic(fs1: FuzzySet, fs2: FuzzySet, x:number) {
		if(Math.max(fs1.apply(x), fs2.apply(x))== 1) {
			return Math.max(fs1.apply(x), fs2.apply(x));
		}
		return 0;
	}

	bounded(fs1: FuzzySet, fs2: FuzzySet, x: number) {
		return Math.max(1, fs1.apply(x) + fs2.apply(x));
	}
}