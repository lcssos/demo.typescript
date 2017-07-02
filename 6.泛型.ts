function identity<T>(arg: T): T {
    return arg;
}

let output = identity("myString");



function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}


//泛型类型
let myIdentity: <T>(arg: T) => T = identity;
let myIdentity2: <U>(arg: U) => U = identity;
let myIdentity3: {<T>(arg: T): T} = identity;



interface GenericIdentityFn<T> {
    <T>(arg: T): T;
}

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity4: GenericIdentityFn<string> = identity;
// let myIdentity5: GenericIdentityFn<number> = identity;




//泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };



//泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}


