export class BinarySearchTree {
  private leftNode: BinarySearchTree | undefined
  private rightNode: BinarySearchTree | undefined
  private _data: number


  constructor(data: number) {
      this._data = data
  }

  public get data(): number {
    return this._data
  }

  public get right(): BinarySearchTree | undefined {
    return this.rightNode
  }

  public get left(): BinarySearchTree | undefined {
    return this.leftNode
  }

  public insert(item: number) {
    
    if (item <= this._data){
      if (typeof this.leftNode === 'object'){
        this.leftNode.insert(item)
      }
      else{
        this.leftNode = new BinarySearchTree(item)
      }
    }
    else{
      if (typeof this.rightNode === 'object'){
        this.rightNode.insert(item)
      }
      else{
        this.rightNode = new BinarySearchTree(item)
      }
    }
  }

  public each(callback: (data: unknown) => unknown) {
    this.leftNode?.each(callback)
    callback(this.data)
    this.rightNode?.each(callback)
  }
}
