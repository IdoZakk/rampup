export class Matrix {
  private rowMatrix: number[][] = [];
  private columnMatrix: number[][] = [];
  constructor(input: string) {
    let rows: string[] = input.split('\n');
    let rowNumber = 0;
      rows.forEach(row => {
        this.rowMatrix.push([]);
        let columnNumber = 0;
        row.match(/\d+/g)?.forEach( item => { //each number

          this.rowMatrix[rowNumber].push(Number(item));
          if (this.columnMatrix[columnNumber]===undefined){
            this.columnMatrix.push([]);
          }
          this.columnMatrix[columnNumber].push(Number(item));
          columnNumber++;
        })          
        rowNumber++;
      });

  }

  get rows(): number[][] {
    return this.rowMatrix;
  }

  get columns(): number[][] {
    return this.columnMatrix;
  }
}
