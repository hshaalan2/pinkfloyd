// //create an array
// let students = ["Hany" , "Melissa" , "Aidan" , "Maryam" , "John" , "Jack"];
// // alert(students);
// //print friendly message containing array contents
// console.log("Students in this class are: " + students)
// //print array lenght
// console.log("number of elements in this arrary is " + students.length)
// //replace an element in position 0 or first position with anther 
// students[0] = "Mick";
// //print updated array
// console.log("Students in this class are: " + students);
// //print number of elements in array or lenght
// console.log(students.length)

// //create an object named person containing properties firsName and lastName and method fullName ()
// //an object has properties expressed as object.property and methods as object.method(
// var person =  {
//     firstName: "Hany",
//     lastName: "Shaalan",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
    
// }
// //print object property
// console.log(person.firstName)
// //print object method
// console.log(person.fullName())


// // let a = 15;
// // let b = 3;
// // let c = a/b;
// // // alert(c);
// // let expression = (a ===b)
// // // console.log("the expression is " + expression);
// // // alert("the expression is " + expression);

//practicing functions
function myFunction() {
    let age = prompt("How Old Are You?");
    let gender = prompt("What is your Gender?");
    if (age <=50 && (gender == "Male") || (gender == "male")) {
        alert("Hello Young Man");
    }
    if (age >50 && gender == "Male") {
        alert("Hello Old Man");
    }
    if (age <=50 && (gender == "Female") || (gender == "female")) {
        alert("Hello Young Lady");
    }
    if (age >50 && gender == "Female") {
        alert("Hello Old Woman");
    }
    document.getElementById("demo")
}


//practicing functions
function myFunction2() {
   
    document.getElementById("writeme").innerHTML = "Acknowledged";
}

//practicing functions
function myFunction3() {
    let myString = "Hello Is Any Body Out There?";
    alert(myString + " is a " + typeof myString);
    alert(typeof myString);
    console.log(typeof myString);
    let myNumberInt= 1968;
    alert(myNumberInt);
    alert(typeof myNumberInt);
    console.log(typeof myNumberInt)
    let myNumberDec = 101.1;
    alert(myNumberDec);
    alert(typeof myNumberDec)
    console.log(typeof myNumberDec)
    let myUndefined = "";
    alert(myUndefined);
    alert(typeof myUndefined);
    console.log(typeof myUndefined);
    let myBooleanTrue = true;
    alert(myBooleanTrue + "is a" + typeof myBooleanTrue);
    alert(typeof myBooleanTrue);
    console.log(typeof myBooleanTrue);
    let myBooleanFalse = false;
    alert(myBooleanFalse);
    alert(typeof myBooleanFalse);
    console.log(typeof myBooleanFalse)

}

//practicing functions
function myFunction4() {
    let hungerLevel = prompt("On a scale of 1 to 10, what is your hunger level right now?");
    let lunchTime = false;
    if (hungerLevel >=5) {
        alert("Your hunger level evaluates to true. You should probably eat something")
           }
    else if (hungerLevel <5) {
        alert("your hunger level evaluates to false. Please wait for next meal")
    }
    if (lunchTime) {
        alert("I just checked and it is lunchtime so let's head to cafe")
    }
    else if (!lunchTime) {
        alert("I just checked and it is not yet lunchtime so let's wait for bell")
    }
        
}

//practicing functions
function myFunction5 () {
    let currentDate = new Date().getFullYear()
    alert(currentDate);
}

//practicing for loops
// var sites = ["site1" , "site2" , "site3" , "site4" , "site5" , "site6"];
// for (var i = 0; i <sites.length; i++) {
//     console.log(sites[i]);;

// }

// var countries = ["USA" , "Russia" , "France" , "China" ,"UK" , "Egypt" , "Ireland" , "Spain" , "Bolivia"];
// for (var i = 0; i <countries.length; i++) {
//     console.log("I have visited " + countries[i] + ".");
    
// }

// var friends = ["Rachel" , "Chandler" , "Ross" , "Joey" , "Phoebe"];
// for (var i = 0; i < friends.length; i++) {
// // alert("I like " + friends[i] + ".")
// console.log("I like " + friends[i] + ".");
// }

// var presidents = ["Biden" , "Trump" , "Obama" , "Bush" , "Clinton" , "Bush"]
// for (var i =0; i < presidents.length; i++) {
//     console.log("I didn't vote for " + presidents[i] + ".")

// }

// var cars = ["Honda" , "Mazda" , "Nissan" , "BMW"];
// for (var i = 0; i < cars.length; i++) {
//     console.log("I like to drive a " + cars[i] + ".")

// }

//Trying to understand declarations hoisting https://www.w3schools.com/js/js_hoisting.asp
// x = 5;

// console.log(x);

// var y;
// console.log(y)

// y = "Defined Variable"
// console.log(y) 

//objects are variables too and can contain many propreties and values  https://www.w3schools.com/js/js_objects.asp

//practicing creating objects
// let myCarObject = {make:"Nissan" ,model:"Murano" , year:"2016" , color:"Blue" }
// console.log(myCarObject)

// let myLaptopObject = {
//     make:"Asus",
//     model:"VivoBook",
//     display:"15'",
//     weight:"2 lbs",
//     title: function() {
//         return this.make + " " + this.model
//     }
// }

// console.log(myLaptopObject)
// console.log(myLaptopObject.title())

// // console.log(myCarObject.color)

// mySon = {
//     fName: "Aidan",
//     lName: "Shaalan",
//     hair: "black",
//     eyes: "brown",
//     fullName: function () {
//         return this.fName + " " + this.lName;
//     }
// }
// console.log(mySon.fullName())

// mySelf = {
//     fName: "Hany",
//     lName: "Shaalan",
//     age: "44",
//     hometown: "Cairo",
//     fullName: function() {
//         return mySelf.fName + " " + mySelf.lName;
//     }
    
// }
// console.log(mySelf.fullName())

//stuff I struggled with on 2/27/21 class from chapter 24
//WRITE YOUR CODE BELOW

// let hotelObject = {
//     maxRooms:50,
//     roomRates: 100,
//     hasPool: true,
//     staff: ["Michael", "Jenny" , "Peter"],
// }

// // //remeber {} for functions and objects
// // // property:value is called a value pair. In defining objects, use equal with object name and then colon when defining value pairs and ending with comma not semi colon
// // //in Python they call objects Dictionaries 

// // // console.log(hotelObject)
// // // console.log(hotelObject.hasPool) 
// // // or 
// // console.log(hotelObject["hasPool"])

// let hotelObject = {
//     maxRooms:50,
//     roomRates: 100,
//     guests: 25,
//     hasPool: true,
//     staff: ["Michael", "Jenny" , "Peter"],
//     checkPool: function () {
//         console.log("Pool is " + hotelObject.hasPool)
//     },
//     checkIn: function () {
//         if (hotelObject.maxRooms > hotelObject.guests); {
//             console.log("Vacancy Come stay with us");
//             hotelObject.guests = hotel.guests + 1;
//            }   
//            //I couldn't add an else statement to the if stat inside a function inside an object

//     }
// }
       
// hotelObject.checkPool()
// hotelObject.checkIn()

// var maxSuits = 50;
// var guests = 25;
// if (guests < maxSuits) {
//     console.log("We have vacacny")
// } else {
//     console.log("we don't have vacancy")
// }

function myFunction6 () {

//defining starting zero values of statistics 
let userWin = 0;
let userLoss = 0;
let tie = 0;
let computerWin = 0;
let computerLoss = 0;
//defining starting 1 value for rounds
let round = 1;

let playAgain = confirm("Want to play?");
//while(Boolean) is same synatx as while(Boolean === true)
while(playAgain){
    //user choice
    let userChoice = prompt(`This is round ${round}\nPlease enter R for Rocks, P for Paper, or S for Scissors`)
    if (userChoice === "R") {
        alert("You chose Rocks");
        }
    else if (userChoice === "P") {
        alert("You chose Paper");
        }
    else if (userChoice === "S") {
        alert("You chose Scissors");
        }
    console.log(`User choice is ${userChoice}`)

    //Computer Choice
        function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
        let randomNumber = getRandomInt(3);

    //Declare computerChoice variable then define it later
        let computerChoice;
    //If else statments to capture three possible outcomes for computerChoice
    if (randomNumber === 0) {
        computerChoice = "R" 
        alert(`Computer chose Rocks`);
    }
    else if (randomNumber === 1) {
        computerChoice = "P"
        alert(`Computer chose Paper`);
    }
    else if (randomNumber === 2) {
        computerChoice = "S"
        alert(`Computer chose Scissors`);
    }
    console.log(`Computer choice is ${computerChoice}`)


    //Processing results
    let result;
    if(userChoice === computerChoice) {
        result = "Tie";
        //increment tie variable by one
        tie++
    }
    else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "S" && computerChoice === "P") ||
        (userChoice === "P" && computerChoice === "R")
    ) {
    result = "You Win";
    //increment userwin variable by 1
    userWin++;
    }
    else {
    result = "Computer Wins";
    //increment computerWins and userLoss varialbe by 1
    computerWin++;
    userLoss++;
    }

    //alerting result
    alert(result);
    //alerting result
    console.log(result);

    //alerting running tally of results
    let tally = `Rounds:${round}\nTies:${tie}\nWins:${userWin}\nLosses:${userLoss}`;
    alert(tally);

    //logging running tale of results
    console.log(tally)
    //ask user to confirm if they want to play again, if OK or true it loops from begining if Cancel or fale oop terminates
    playAgain = confirm("Want to play again?");
    round++; 

}


}

//ITERATIONS SAMPLE
let presidents = ["Biden" , "Trump", "Obama" , "Bush"];
for (var i = 0; i <4 ; i++) {
    console.log(`POTUS is ${presidents[i]}`)
}

let bestPink = ["Hey You", "Shine On You Crazy Diamon" , "Wish You Were Here" , "Brain Damage"];
for (var i = 0; i < 4; i++) {
    console.log(`One of Pink Floyd's best songs is ${bestPink[i]}`)

}

let bestActors = ["Denzel" , "Al Pacino" , "Russel Crow" , "Robert De Niro"]
for (var i = 0; i < 4; i++) {
console.log(`My fav actor is ${bestActors[i]}`)
}


let bestPlayers = ["Alex" , "Nick" , "Oshie" , "Wilson"]
for (var i = 0; i <4; i++) {
console.log(`Best Caps player is ${bestPlayers[i]}`)
}

//ARRAYS METHODS
var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

//add element to first position  I did it the long way first added then sorted which oly worked bcause new element came first in ABC 
constellations.push("Canis Major")
console.log(constellations)
constellations.sort()
console.log(constellations)

//leanred about shifts and unshifts so will shift to undo what I did earlier then unshit
constellations.shift();
console.log(constellations);
constellations.unshift("Canis Major");
console.log(constellations);

//using pop() to remove last element of planets
console.log(planets)
planets.pop()
console.log(planets)

//join two arrays
galaxy = constellations.concat(planets)
console.log(galaxy)

starUpper = star.toUpperCase()
console.log(starUpper)


