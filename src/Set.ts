
export class Set<T> {
  protected values: T[];
  constructor(values:T[]){
      this.values = values
  }

  product(otherset: Set<T>){
      return this.values.map(x => otherset.get_items().map(y => (x,y)));
  }

  get_items(): T[]{
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
}
