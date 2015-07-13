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
}