"use strict";
//contructor is used to create instance of a class.
/*class Employee {
    id!: number;
    name!: string;
    address!: string;

    constructor(id: number,name: string, address:string){
        this.address = address;
        this.id = id;
        this.name = name;
    }

    getNameWithAddress() : string {
       //both are same  // return this.name + "say at " + this.address;
        return `${this.name} say at ${this.address}`;

}


}


let jhon = new Employee(1, "jhon", "Highway 71");
let address = jhon.getNameWithAddress();
console.log(jhon);

*/
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        this.address = address;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    getNameWithAddress() {
        //both are same  // return this.name + "say at " + this.address;
        return `${this.name} say at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
let jhon = new Employee(1, "jhon", "Highway 71");
//protected modifier ko usi class me access kar sakte hai jiske sath extend kiye hai
//Member visibility
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let address = jhon.getNameWithAddress();
console.log(address);
let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
