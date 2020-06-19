let name = "Iman";
//this is a variable declared using 'let' keyword
const USstates = 50;
//this is a constant and it's immutable
let sum = 5 + 4;
//this is a variable that contains the result of this arithmetic operation
function sayHello(msg)
{
    return alert(msg);
}
//we are now gonna call the sayHello function
sayHello("Hello World!");

function checkAge(name, age)
{
    if (age<21){
        return "Sorry "+name +", you aren't old enough to view the page.";
    } else {
        return "Hallo "+name + ", you are older than 21!";
    }
}

console.log(checkAge("Charles", 21));
console.log(checkAge("Abby", 27));
console.log(checkAge("James", 18));
console.log(checkAge("John", 17));

var gemuse = ["Brokkoli", "Zweibeln", "Kartoffeln", "Aubergine", "Knaublauch", "Ingwer"];
for (gem of gemuse) 
{
    console.log(gem);
}

let pet = {
    name: "Sherlock",
    breed: "Persian"
};
console.log(pet.name);
console.log(pet.breed);

var objects = [
    {
        name: "Anna",
        age: 22
    },
    {
        name: "Hathaway",
        age: 19
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Hasan",
        age: 17
    },
    {
        name: "Adele",
        age: 28
    }
];

for (object of objects)
{
    console.log(checkAge(object.name, object.age));
}

function getLength(word)
{
    let count = 0;
    for (w of word)
    {
        count+=1;
    }
    return count;
}
let result = getLength("Hello World");

if (result%2==0)
{
    console.log("The world is nice and even");
} else {
    console.log("The word is an odd place!!");
}