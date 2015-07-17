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

  export function range(start: number, end:number){
  	let result: number[];
  	for(let i = start; i < end;++i){
  		result.push(i);
  	}
  	return result
  }
}