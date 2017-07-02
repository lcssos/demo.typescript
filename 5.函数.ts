function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x+y; };

let myAdd2: (x:number, y:number)=>number = function(x: number, y: number): number { return x+y; };

let myAdd3: (baseValue:number, increment:number) => number = function(x: number, y: number): number { return x + y; };

let myAdd4: (baseValue:number, increment:number) => number = function(x, y) { return x + y; };



//可选参数和默认参数
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right


function buildName2(firstName: string, lastName = "Smith") {
    // ...
}



//剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");


//this
