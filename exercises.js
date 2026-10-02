// Task 1: Destructuring, Spread, and Rest (25 points)

//1======
 const location = { name: "Amina", age: 24, city: "Nairobi" };

const {name,age,city} = location;
 console.log(name); //Amina
 console.log(age);
// 2========================
const location1 = { name: "Amina", age: 24, city: "Nairobi" };
const { name:fullName} = location1; //Amina
console.log(fullName);

// 3=======================
const brian = { name: "Brian", age: 24, city: "Nairobi" };

const { nameBrian, role = "student"} = brian;
// 4=============================
const student = { name: "Lilian", address: { city: "Mombasa", county: "Mombasa", zip: "80100" } };
 const{address:{city:cityName,county}} =student;
 console.log(cityName);// Mombasa

 //5=========
 const towns= ["Nairobi", "Mombasa", "Kisumu", "Nakuru"];
 const [first, , third, ] =towns;
 console.log(`The first town is ${first} and the third town is ${third} `);  // The first town is Nairobi and the third town is Kisumu
 
 //1.Spread (5 exercises):
 // 1.Merge two arrays: [1, 2, 3] and [4, 5, 6] into one

 const array1 = [1,2,3];
 const array2 = [4,5,6];
 const merged_array = [...array1, ...array2];
 console.log(merged_array);  //[ 1, 2, 3, 4, 5, 6 ]

 //2.Create a shallow copy of an object and change one property without mutating the original
 const names = {
    firstName: "Joseph",
    seconName: "Githinji",
    lastName: "Kibia"
 }
 const namesCopy =  {...names} ; 
 namesCopy.nickName = "Master"                    //{...names, nickName : "Master"};
 
 console.log(names);  //{ firstName: 'Joseph', seconName: 'Githinji', lastName: 'Kibia' }
 console.log(namesCopy); //{ firstName: 'Joseph', seconName: 'Githinji', lastName: 'Kibia',nickName: 'Master' }

 //3.Use spread to pass array elements as function arguments: Math.max(...numbers)

 const numbers = [1,2,3,4,5,6];
 const maxNumber = Math.max(...numbers);
 console.log(maxNumber);//  6

 //4.Merge two objects, with the second overriding shared keys: { a: 1, b: 2 } and { b: 3, c: 4 } → { a: 1, b: 3, c: 4 }
const objectA = { a: 1, b: 2 };
const objectB = {...objectA, b:3,c:4};
console.log(objectB);  // { a: 1, b: 3, c: 4 }

//5.Add items to the beginning and end of an array without using push/unshift

const colors = ['red','blue','yellow'];
const manyColors = ['black',...colors, 'orange'];
console.log(manyColors);  // [ 'black', 'red', 'blue', 'yellow', 'orange' ]


//Rest (5 exercises):

//1. Write a function sum(...numbers) that accepts any number of arguments and returns their sum
function sum(...numbers){
    let total = 0;

    for(const num of numbers){
        total += num;
    }
    return total;
}
console.log(sum(100, 200, 300)); // 600

//2.Write a function that takes a first parameter and collects the rest: function greet(first, ...others)

function feesPaid(paymentType, ...amounts){
    const total = amounts.reduce( (acc, amt) => acc + amt, 0);
    console.log(`Amount paid through ${paymentType} is ${total}`);  
}

feesPaid('Cash', 1000,1200,34620,8000);  // Amount paid through Cash is 44820
feesPaid('MPESA',  25000,15000,20000); // Amount paid through MPESA is 60000

//3.Destructure an object keeping specific keys and collecting the rest: const { name, ...details } = person

const person = {
    name: "Joseph",
  age: 41,
  city: "Nairobi",
  occupation: "Business",
}
const{name:myName,age:years,...otherDetails} = person;
console.log(otherDetails);  //{ city: 'Nairobi', occupation: 'Business' }

//3.Write a function head(first, ...rest) that returns the first element and the remaining array

function head( first, ...rest){
    return `First element: ${first} , Last Element: ${rest}`;
}
console.log(head(10, [33,4,67,23,1,0])); //First element: 10 , Last Element: 33,4,67,23,1,0

// 5.Use rest to write a function that logs the first argument and counts the remaining: "First: X, remaining: Y"

function logFirst_count(first, ...rest){
    console.log(`First:${first}, remaining: ${rest}`);

}
logFirst_count(65, [4,5,6,3,77,]);  // First:65, remaining: 4,5,6,3,77