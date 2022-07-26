
export class List {
  private arr: unknown[];
  private constructor(values: unknown[]){
      this.arr = values
  }
  public static create(...values: unknown[]): List {
    return new List(values)
  }

  public forEach(callback: (x:unknown) => unknown) : void {
    for (let i = 0; i < this.length(); i++ ) {
        callback(this.arr[i])
    }
  }

  public append(other: List): List {
    let result = List.create()
    for (let i = 0; i < this.length(); i++){
      result.arr[i] = this.arr[i]
    }
    for (let i = 0; i <other.length(); i++) {
      result.arr[this.length() + i] = other.arr[i]
    }
    return result
  }

  public concat(other: List): List {
    let result = List.create()
    result.addFlatRecursive(this);
    result.addFlatRecursive(other)
    return result
  }

  private addFlatRecursive(other: List):void {
    for (let i = 0; i< other.length(); i++)
    {
      if (other.arr[i] instanceof List)
      {
        let temp : any = other.arr[i]
        this.addFlatRecursive(temp)
      }
      else
      {
        this.arr[this.length()] = other.arr[i]
      }
    }
  }
  

  public filter<T>(callback: (x: T) => boolean) : List {
    let result = List.create()
    for (let i = 0; i< this.length(); i++) {
      if (callback(this.arr[i] as T)) { 
        result.arr[result.length()]=this.arr[i]
      }
    }
    return result
  }
  
  public length() : number {
    return this.arr.length
  }

  public map<T>(callback: (x: T) => void):List {
    let result = List.create()
    for (let i = 0; i < this.arr.length; i++)
    {
      result.arr[i] = callback(this.arr[i] as T)
    }
    return result
  }

  public foldl<T1, T2>(callback: (accum:T1, item: T2)=> T1, accum: T1) : unknown {
    let result: T1 = accum
    for (let i = 0; i < this.length(); i++)
    {
      accum = callback(accum, this.arr[i] as T2)
    }
    return accum
  }

  public foldr<T1, T2>(callback: (accum:T1, item: T2)=> T1, accum: T1) : unknown {
    let result: T1 = accum
    for (let i = this.length() - 1 ; i >= 0; i--)
    {
      accum = callback(accum, this.arr[i] as T2)
    }
    return accum
  }
  public reverse(): List {
    let result =  List.create()
    for (let i = 0; i < this.length(); i++)
    {
      result.arr[i] = this.arr[this.length()-1-i]
    }
    return result
  }
}
