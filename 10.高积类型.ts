//交叉类型（Intersection Types）
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person2 {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person2("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();




//联合类型
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
   return null;
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors



//高级类型未看完
//类型保护与区分类型
//类型别名
//字符串字面量类型
//可辨识联合（Discriminated Unions）
//多态的this类型
