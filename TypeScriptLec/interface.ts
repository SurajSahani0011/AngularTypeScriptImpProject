interface User {
  name: string;
  age?: number;// make optional
  id: number;
  email: string;
}

let user: User = {
  name: "jhon",
  age: 1,
  id: 1,
  email: "",
};

interface Employees extends User{
  salary: number;
}

let employee: Employees = {name: "jhon", id: 1, email: "", salary: 1000};

export interface Login {
    Login(): User;
}