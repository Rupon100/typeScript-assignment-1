// 1
const formatValue = (value: string | number | boolean) => {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }else if(typeof value === 'number'){
        return value * 10;
    }else{
        return !value;
    }
}
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));


// 2
type CheckParam = string | unknown[];
const getLength = (value: CheckParam) => {
    if(typeof value === 'string'){
        return value.length;
    }
    if(Array.isArray(value)){
        return value.length;
    }
}
// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

// 3
class Person {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


// 4
type Values = {
    title: string;
    rating: number;
}
const filterByRating = (values: Values[]): Values[] => {
    return values.filter(value => value.rating >= 4)
}
// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];
// console.log(filterByRating(books));




// 5
type Properties = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}
const filterActiveUsers = (values: Properties[]): Properties[] => {
    return values.filter(value => value.isActive === true);
}
// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));







// 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable === true ? 'Yes' : 'No'}`)
}
// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);




// 7
type ArrayType = number[];
const getUniqueValues = (array1: ArrayType, array2: ArrayType) => {
    const newArr = array1.concat(array2);
    return [...new Set(newArr)];
}
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));





// 8
interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
    if(products.length > 0){
        const price = 0;
        const totalPrice = products.reduce((acc, current) => acc + current.price*current.quantity ,0);
        return totalPrice;
    }
    return 0;
}
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));

