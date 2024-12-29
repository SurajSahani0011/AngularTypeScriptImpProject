//using in interface
import { Login } from './interface'
interface Address {
    street: string;
    city: string;
    state: string;
    pin: string
};


class Employee implements Login {
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

/*

class Employee {
    #id!: number;
   protected name!: string;
    address!: string;

    constructor(id: number,name: string, address:string){
        this.address = address;
        this.#id = id;
        this.name = name;
    }

    getNameWithAddress() : string {
       //both are same  // return this.name + "say at " + this.address;
        return `${this.name} say at ${this.address}`;

}


}


let jhon = new Employee(1, "jhon", "Highway 71");
//protected modifier ko usi class me access kar sakte hai jiske sath extend kiye hai

//Member visibility
class Manager extends Employee {

    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let address = jhon.getNameWithAddress();
console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
*/


/*
class Employee {
  #id!: number;
  protected name!: string;
  address!: string;

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }

  getNameWithAddress(): string {
    //both are same  // return this.name + "say at " + this.address;
    return `${this.name} say at ${this.address}`;
  }
}

let jhon = new Employee(1, "jhon", "Highway 71");

//Member visibility
Employee.getEmployeeCount();
class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}
let address = jhon.getNameWithAddress();
console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());
*/