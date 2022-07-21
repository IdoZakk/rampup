// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
     
    greet("Brendan", new Date());
    console.log(typeof([1,2,3]));  
    let obj = { x: 0 };
    // The parameter's type annotation is an object type
  function printCoord(pt: { x; y }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });
  console.log("new");
  
  interface Home {
    readonly resident: { name: string; age: number };
  }
   
  function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
  }
  
  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle = Colorful & Circle;
  
  function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }
   
  // okay
  draw({ color: "blue", radius: 42 });
   