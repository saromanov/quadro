

//http://www.cl.cam.ac.uk/~sd601/papers/semirings.pdf
interface Semiring<T> {
	zero():T;
	one():T;
	plus(one:T, second:T):T;
	dot(one:T, second:T);
}