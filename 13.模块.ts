//导出声明
//任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加export关键字来导出。
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}



//导出语句
class ZipCodeValidator2 implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator2 };
export { ZipCodeValidator2 as mainValidator };



//导入一个模块中的某个导出内容
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();


import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();



//export = 和 import = require()

