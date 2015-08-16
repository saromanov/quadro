export module Utils{
	export function power(x:number, n:number){
	let result = 1.0;
	while(n != 0){
		if(n % 2 != 0){
			result *= x;
			n -= 1;
		}
		x *=x;
		n/=2;
	}
	return result;
  }

  export function mod_power(g:number, p:number, mod: number){
  	let result = 1.0;
  	g = g % mod;
  	while(p > 0) {
  		if(p % 2 == 1){
  			result = (result * g) % mod;
  		}
  		p = p >> 1;
  		g = (g * g) % mod;
  	}
  	return result;
  }

  export function range(start: number, end:number): number[]{
  	let result: number[] = [];
  	for(let i = start; i < end;++i){
  		result.push(i);
  	}
  	return result
  }

  export function zeros(num: number): number[] {
  	let result: number[] = [];
  	for(let i = 0; i < num;++i){
  		result.push(0);
  	}
  	return result
  }

  export function equal(item1:number[][], item2: number[][]):boolean {
  	if(item1.length != item2.length) {
  		return false;
  	}

  	if(item1[0].length != item2[0].length) {
  		return false;
  	}

  	for(let i = 0;i < item1.length;++i) {
  		for(let j = 0;j < item1[0].length;++j){
  			if(item1[i][j] != item2[i][j]) {
  				return false;
  			}
  		}
  	}

  	return true;
  }

}
