const formatValue = (value: string | number | boolean): string | number | boolean => {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }else if(typeof value === 'number'){
        return value * 10;
    }else{
        return !value;
    }
}
 



type CheckParam = string | unknown[];
const getLength = (value: CheckParam): number => {
    if(typeof value === 'string'){
        return value.length;
    }
    if(Array.isArray(value)){
        return value.length;
    }
    return 0;
}





class Person {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}
 




type Values = {
    title: string;
    rating: number;
}
const filterByRating = (values: Values[]): Values[] => {
    return values.filter(value => value.rating >= 4)
}




 
type Properties = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
}
const filterActiveUsers = (values: Properties[]): Properties[] => {
    return values.filter(value => value.isActive === true);
}






interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable === true ? 'Yes' : 'No'}`)
}


 


const getUniqueValues = <T extends number | string>(array1: T[], array2: T[]): T[] => {
    const result: T[] = [];

    for(let i = 0; i < array1.length; i++){
        let val = array1[i];
        let flag = false;
        for(let j = 0; j < result.length; j++){
            if(result[j] === val){
                flag = true;
                break
            }
        }
        if(!flag){
            result.push(val);
        }
    }

    for(let i = 0; i < array2.length; i++){
        let val = array2[i];
        let flag = false;
        for(let j = 0; j < result.length; j++){
            if(result[j] === val){
                flag = true;
                break;
            }
        }
        if(!flag){
            result.push(val)
        }
    }
    return result;
}







interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
    if(products.length > 0){
        const reduceTotal = products.reduce((sum, current) => {
            const price = current.quantity * current.price;
            const discount = current.discount ? price * (current.discount / 100) : 0;
            const diff = price - discount;
            return diff + sum;
        }, 0);
        return reduceTotal;
    }
    return 0;
}
 

