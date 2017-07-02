
let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// let name: string = "bob";
// name = "smith";


let name2: string = "Gene";
let age: number = 37;
let sentence: string = `Hello, my name is ${ name2 }.

I'll be ${ age + 1 } years old next month.`;


let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

//元组 Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error


//枚举
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

enum Color2 {Red = 1, Green = 2, Blue = 4};
let c2: Color2 = Color2.Green;


//任意值
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//空值
function warnUser(): void {
    alert("This is my warning message");
}


//Null 和 Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;


//Never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}


//类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 另一个为as语法：
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

