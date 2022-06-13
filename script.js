var firstName, lastName, age;
var firstName = 'Stephen';
var lastName = "Zanker";
var age = 41
var num1 = 5;
var num2 = 10;
var numAnswer = num1 + num2;
var a = (5 + 5) * 2;
var b = 10 + '5';
var c = 'Hello ' + firstName + ' how are you today?';
var d = 5 + 10 + "b"
var e = 'b' + 5 + 10;
//Line comment
/* Block Comment */
//Console outputs
console.log(firstName, lastName, age);
console.log(num1 < num2);
console.log(num1 * num2);
console.log(num1 != num2);
console.log(numAnswer);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(1 == true);
console.log(0 == false);
//If statements
if (age > num1){console.log("age is greater")} else{console.log("age is less")};
var prof = 'instructor';
if(prof === 'instructor'){
    console.log(prof + ' teaches students');
} else if(prof === 'doctor'){
    console.log(prof + ' treats people');
} else {
    console.log('professions do not match');
}
//Declaring a function statement
function fName(){
    console.log('Message from fName function');
}
//Calling the function
fName();
//Create function with two parameters
function passExam(name, score){
    var passUni = 71;
    var passColl = 51;

    if(score >= passUni){
        console.log(name + ' has enrolled in Uni with ' + score + ' points');
    } else if(score >= passColl){
        console.log(name + ' has enrolled in College with ' + score + ' points');
    } else {
        console.log(name + ' has failed!');
    }
}
//Call single function statement and pass in two arguments
passExam('John', 75);
passExam('Mary', 65);
passExam('Bob', 45);
//Create another function
function calcScore(quizScore, essayScore){
    var score = quizScore + essayScore;
    return score;
}
//Use 2 x Function statements to calculate a result
passExam('Michael', calcScore(40,30));

function add(a,b){
    console.log(a+b);
}
add(5,10); //This can be called anywhere in the code

//Another way to declare a function (Function expression)
var sum = function(a,b){
    console.log(a+b)
}
sum(10,15); //This has to be declared after the function because it is an expression

//ARRAYS
var arrNames = ['John', 'Stephen', 'Michael'];
var arrMixed = ['Jack', 'Peter', 10, true, [1,2,3]];
console.log(arrNames);
//Call specific item from array
console.log(arrNames[2]);
//Call specific item from array within array
console.log(arrMixed[4][1]);
//Create an array with a function expression in it
var arrFunction = [
    'David', 
    'Stephen', 
    function(name){
        return 'Hello ' + name;
    }
];
console.log(arrFunction[2](arrFunction[1]));
var colours = ['White', 'Black', 'Red'];
console.log(colours);
colours [1] = 'Green'; //Replace Black with Green.
console.log(colours);
colours.push('Blue'); //add item 'Blue' to end of array
console.log(colours);
colours.pop(); //remove last item from array
console.log(colours);
colours.shift(); //remove first item from array
console.log(colours);
colours.unshift('Purple'); //add new item at start of array
console.log(colours);
console.log(colours.indexOf('Green')); //returns index number of item
console.log(colours.indexOf('Brown')); //returns -1 if item is not in array

if(colours.indexOf('Orange') === -1){ //if Orange is not in array
    colours.push('Orange'); //add it to the end of the array
    console.log(colours);
}
// CREATING OBJECTS
var person = new Object();

person.firstname = 'John';//Member Access Operator (.)
person['lastname'] = 'Smith';
person['job'] = 'instructor';
console.log(person);
console.log(person.firstname);
console.log(person['lastname']);
var job = 'Profession'; //changes the title from job to Profession
person[job] = 'Instructor'; //changes the title from job to Profession
console.log(person);

//Create an object within an object
var personTwo = new Object();
personTwo.firstname = 'Jane';
personTwo.lastname = 'Baker';
personTwo.son = new Object();
console.log(personTwo);
personTwo.son.name = 'Nick';
personTwo.son.age = 5;
console.log(personTwo);

//Literal Object creation
var personThree = {
    firstname: 'David', 
    lastname: 'Donaldson', 
    age: 45};
//Literal Object creation inside of another Literal Object.
console.log(personThree);
var personFour = {
    firstname: 'Jake', 
    lastname: 'Garmin', 
    age: 55,
    daughter: {
        name: 'Grace', 
        age: 5},
    myFunc: function(){
        console.log('Message within the function')
    }
};
personFour.myFunc();
console.log(personFour);
console.log(personFour.daughter.name); // grab an item from an object

//Define method personFive
var personFive = {
    firstName:'David',
    lastName: 'Johns',
    age: 33,
    daughter: {
        name: 'Sarah',
        age: 6
    },
    //Define a function within a method (myFunc5)
    myFunc5: function(daughterName, fatherName, daugherAge)
    {
        console.log(daughterName + ' is a daughter of ' +
                   fatherName + ' and she is ' + daugherAge +
                    ' years old');
    }
};
//Call the method and function results
personFive.myFunc5(personFive.daughter.name, personFive.firstName,
              personFive.daughter.age);

//Create a literal method and function and cdefine results on the fly

var Person6 = {
    func6: function(par){
    console.log(par.daughterName + ' is a daughter of ' +
                   par.fatherName + ' and she is ' + par.daughterAge +
                    ' years old');
    }
};
console.log("::::::::::::::::::");
Person6.func6({daughterName: 'Jessy', fatherName: 'Michael',
              daughterAge: 5});

//LOOPS
var array1 = ['Bob', 'David', 'Sam', 'Grace', 'Peter'];
for(var i = 0; i < 5; i++){ // (define i, set test condition, increment by 1)
    console.log(array1[i]);
}
console.log("::::::::::::::::::");

var array2 = ['Sam', 'David', 'Bob', 'Grace', 'Peter'];
// (define i, set test condition (using length of array), increment by 1)
for(var i = 0; i < array2.length; i++){ 
    
    console.log(array1[i]);
}
console.log("::::::::::::::::::");

//Search through an array using a loop
var arrSearch = ['Daniel', 'Sam', 'Fred', 'Bob', 'Mary'];
for(var i = 0; i < arrSearch.length; i++){
    if (arrSearch[i] === 'Fred'){
        console.log(arrSearch[i] + ' is the name we searched for!');
    }
}

console.log("::::::::::::::::::");

//list everything except the name specified
var arrSearch2 = ['Daniel', 'Sam', 'Fred', 'Bob', 'Mary'];
for(var i = 0; i < arrSearch2.length; i++){
    if (arrSearch2[i] === 'Fred'){
        continue;
    }
    console.log(arrSearch2[i]);
}
console.log("::::::::::::::::::");

//list everything until the name specified
var arrSearch3 = ['Daniel', 'Sam', 'Fred', 'Bob', 'Mary'];
for(var i = 0; i < arrSearch3.length; i++){
    if (arrSearch3[i] === 'Fred'){
       break;
    }
    console.log(arrSearch3[i]);
}
console.log("::::::::::::::::::");

//WHILE LOOPS
var i = 0;
while(i<=10){
    console.log(i);
    i++
}
console.log("::::::::::::::::::");

var colours = ['white', 'blue', 'green', 'red', 'purple'];
var i = 0
while (i < colours.length){
    console.log(colours[i]);
    i++;
}
console.log("::::::::::::::::::");
var colours = ['white', 'blue', 'green', 'red', 'purple'];
var i = 0;
do{
    console.log(colours[i]);
    i++
} while(i < colours.length);

console.log(":::::::::CURRENT DATE:::::::::");

var date = new Date();
console.log(date);

console.log(":::::::::FIXED DATE:::::::::");

var date = new Date("January 20, 2020 10:14:00");
console.log(date);

console.log(":::::::::PART OF DATE:::::::::");

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
console.log(year);
console.log(month);

console.log(":::::::::SET PART OF DATE:::::::::");

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
date.setFullYear(1990);
date.setMonth(11);
console.log(date);
console.log(":::::::::DIGITAL CLOCK:::::::::");





