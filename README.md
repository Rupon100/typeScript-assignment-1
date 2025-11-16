# Interview Questions
1. What are some differences between interface and types in TypeSCript?
- type is more flexible and can define primitives, unions, tuples, functions and objects.
interface are mainly used for describing object and class structures. interface support declaration merging and are preferred when designing object shapes or class contracts.
Types cannot merge but are ideal for unions and more complex type compositions.

2. What is the use of the keyof keyword in TypeScript? Provide an example.
- keyof is a TypeScript operator that returns a union of all property names of a given type. It is used for type-safe property access.
example code: 
type Student = { id: number; name: string };
type KeyOfStudent = keyof Student; // -> "id" | "name"

3. Explain the difference between any, unknown, and never types in TypeScript.
#### any: 
- Disables type checking.
- we can assign anything and use it anywhere
- least safe type
#### unknown
- safer version of any
- can hold any value, but must check the type before using it.
#### never
- represents a value that never occurs
- used for impossible cases, errors or function that never return
example code: 
let a: any = 5;        // no restrictions
let b: unknown = 5;    // must check before use
let c: never;          // cannot have a value

4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
- Enums are used to define a group of names constant values. They make a code more readable, type-safe, and prevent using invalid values
example code:
enum Status {
  Pending,     // 0
  InProgress,  // 1
  Completed    // 2
}
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

5. Provide an example of using union and intersection types in TypeScript.
- Union types allow a variable to hold one of several types.
type ID = string | number;
let userId: ID;
userId = "A123";
userId = 101;
- Intersection types combine multiple types into one
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staff: Staff = {
  name: "Rahim",
  employeeId: 1001
};




