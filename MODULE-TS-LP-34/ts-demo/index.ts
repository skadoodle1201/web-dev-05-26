import { add, subtract } from "./math.js";

console.log(add(10, 40));
console.log(subtract(40, 10));

let username: string;
let age: number;
let active: boolean = true;
let scores: number[] = [90, 88];

// Inferred from the value:
let city = "Delhi"; // string

// Type-checker catches this:
// age = "twenty"; //This will not work

//Could be exported & imported like a variable
export interface User {
  id: number | string; //Could be number or string
  name: string;
  email: string;
  isActive?: boolean; //? Makes it optional
}

// const user: Array<User> = [...] another way to create array
const user: User[] = [
  {
    id: 1,
    name: "Asha",
    email: "asha@example.com",
  },
  {
    id: "2",
    name: "Usha",
    email: "usha@example.com",
  },
];

function updateUser(current: User, changes: Partial<User>): User {
  return { ...current, ...changes }; //changes will overwrite the duplicate key
}

const newUser: User = {
  name: "Asha",
  email: "a@example.com",
  id: 10,
};

interface Employee extends User {
  role: string;
  employeeId: string;
}

const emp1: Employee = {
  id: 4,
  name: "employee 1",
  email: "employee1@gmail.com ",
  role: "Sales",
  employeeId: "2321321",
};

type OrderStatus = "pending" | "shipped" | "delivered";

type Order = {
  id: number;
  status: OrderStatus;
  total: number;
};

const order: Order = {
  id: 101,
  status: "pending",
  total: 500,
};

interface Shape {
  area: number;
}

interface ThreeDshapes {
  volume: number;
}

type Square = Shape;
type Cube = Shape & ThreeDshapes; // this is intersection
