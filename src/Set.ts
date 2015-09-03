
export class Set<T> {
  protected values: T[];
  constructor(values:T[]){
      this.values = values
  }

  //product of two sets
  product(otherset: Set<T>){
      return this.values.map(x => otherset.items().map(y => (x,y)));
  }

  //A /^\ B = {x : x in A and x in B}
  intersection(otherset: Set<T>): Set<T> {
    return this.filteri(otherset, (x => this.values.indexOf(x) != -1));
  }

  //A \ B = {x : x in A and x not in B}
  difference(otherset: Set<T>): Set<T> {
    let items = otherset.items();
    return this.filteri(otherset, (x => this.values.indexOf(x) == -1));
  }

  //A (+) B = {x : x in A or x in B but not both}
  sim_difference(otherset: Set<T>): Set<T> {
    let items = otherset.items();
    return new Set<T>(items.filter(x => (this.values.indexOf(x) != -1
      || items.indexOf(x) != -1) && !(items.indexOf(x) != -1 && this.values.indexOf(x) != -1)));
  }

  //items returns items 
  items(): T[]{
    return this.values;
  }

  //Return random element from set
  randget():T {
      return this.values[Math.random() * this.values.length];
  }

  //Return true is elem contains this set
  isElement(elem:T): boolean {
      return this.values.indexOf(elem) != -1;
  }

  private filteri(otherset: Set<T>, func:((A:T) => boolean)): Set<T> {
    let items = otherset.items();
    return new Set<T>(items.filter(func));
  }
}
