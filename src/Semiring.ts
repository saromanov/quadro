export {Semiring};

interface Semiring<T> {
	zero():T;
	one():T;
	plus(one:T, second:T):T;
	dot(one:T, second:T);
}