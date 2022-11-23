let name = "Matt";
const no_of_states = 50;
sum = 5 + 4;

function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let fav_vegetables = ['celery', 'potatoes', 'onions', 'carrots', 'beets'];
for (let i = 0; i < fav_vegetables.length; i++) {
    console.log(fav_vegetables[i]);
}

let pet = {
    name: "Kylo",
    breed: "cat",
};

console.log(pet.name);
console.log(pet.breed);

let names_ages = [
    {
        name: "Phil",
        age: 71
    },
    {
        name: "Kelly",
        age: 24
    },
    {
        name: "Gwen",
        age: 20
    },
    {
        name: "Jim",
        age: 15
    },
    {
        name: "Sarah",
        age: 29
    }
];

for (let i = 0; i < names_ages.length; i++) {
    checkAge(names_ages[i].name, names_ages[i].age);
}

function getLength(word) {
    console.log(word.length);
}

getLength("fun");