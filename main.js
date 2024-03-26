///question 1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("hello world!, my name is Zoha Gul");
///question 2 personal message
var personName = "ZohaGul";
console.log("Hello", personName, "Would you like to learn some python today?");
///question 3 name cases
var personName = "ZohaGul";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (Abc) { return Abc.toUpperCase(); }));
///question 4 famous quote
var famousPerson = "Zoha Gul";
console.log(famousPerson, "saying", "\"When we are born, we don't have same ability but life gives us chance to increase our ability\"");
///question 5 famous quote 2
var famousPerson = "\"Zoha gul\"";
var message = ("\"When we are born, we don't have same ability but life gives us chance to increase our ability\"");
console.log(famousPerson, message);
///question 6 stripping name
var spaceName = "\tZohaGul\n";
console.log(spaceName);
var withoutspaceName = spaceName.trim();
console.log(withoutspaceName);
///question 7&8 number 8
///addition
console.log(4 + 4);
/// subtraction
console.log(16 - 8);
/// Multiplication
console.log(4 * 2);
/// division
console.log(64 / 8);
///question 9 favourite number
var favouriteNumber = 2;
var message = "my favourite number is:";
console.log(message, favouriteNumber);
///question 10 add coments
var addComments = "\"by using frontslash/// we can Add comments easily\"";
console.log(addComments);
/// question 11 Names by using array function
var friendsName = ["Esha", "Alishba", "Madiha", "fiza", "hina"];
friendsName.forEach(function (friendsName) { return console.log(friendsName); });
///question 12 greeting by using array and briktick
var friendsName = ["\tEsha\n", "\tAlishba\n", "\tMadiha\n", "\tfiza\n", "\thina\n"];
friendsName.forEach(function (friendsName) { return console.log("Hello ".concat(friendsName, " , hey! How Do you do?")); });
///question 13 make own array
var transport = ["Scooty", "Redbus", "bike", "Auto"];
transport.forEach(function (transport) { return console.log("I will buy my own ".concat(transport, " One day")); });
///question 14 guest invitation list
var guestList = ["Esha", "alishba", "Fiza", "Madiha"];
guestList.forEach(function (guestlist) { return console.log("Asalam-o-alikum ".concat(guestlist, " I would like to invite you at my home for dinner.")); });
///question 15 for removing array by using splice
var guestlist = ["Esha", "alishba", "fiza", "madiha"];
var cannotCome = guestlist[3];
console.log(cannotCome, "due to rain");
guestlist.splice(3, 3, "madiha");
guestlist.forEach(function (guestlist) { return console.log("Asalam-o-alikum ".concat(guestlist, " please you all Come on time for dinner at my home")); });
///question 16  add more guest
//creating array for guest 
var guestList = ["Esha", "alishba", "fiza", "madiha"];
//cretaing variable for those who will not come
var cannotCome = guestList[3];
console.log(cannotCome, "cannot come due to rain");
guestList.splice(3, 4, "sadaf");
console.log("good news !we found a bigger table for dinner in a resturant");
guestList.unshift("saima");
guestList.push("zain");
var middleindex = Math.floor(guestList.length / 2);
guestList.splice(middleindex, 0, "osama");
console.log("updated guest list or our Guests");
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",\"would you like to dinner with me")); });
///question 17 
var guestList = ["Esha", "alishba", "fiza", "madiha"];
//cretaing variable for those who will not come
var cannotCome = guestList[3];
console.log(cannotCome, "cannot come due to rain");
guestList.splice(3, 4, "sadaf");
console.log("good news !we found a bigger table for dinner in a resturant");
guestList.unshift("saima");
guestList.push("zain");
var middleindex = Math.floor(guestList.length / 2);
guestList.splice(middleindex, 0, "osama");
console.log("updated guest list or our Guests");
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",\"would you like to dinner with me")); });
// message 
console.log("unfortunatly, the new dinner table will not arrive one time ,  i can invite only two persons dinner with me");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry ".concat(removedGuest, " i can not invite you for dinner"));
}
console.log("invitations to  the last  2 guests");
guestList.forEach(function (lasttwo) { return console.log("luckly  ".concat(lasttwo, ", you are still invited to dinner ")); });
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);
//question 18 
var countriesToVisit = ["saudiaarabia", "indonasia", "qattar", "dubai"];
console.log("original  Order:", countriesToVisit);
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("Still in original Order:", countriesToVisit);
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in original Order:", countriesToVisit);
console.log("Original Array Reversed :", countriesToVisit.reverse());
console.log("Back to Original Order:", countriesToVisit.reverse());
console.log("Sorted in Alphabetical Order", countriesToVisit.sort());
console.log("original Array Reversed Again:", countriesToVisit.reverse());
//question 19node 
var guestList = ["hamza", "usman", "ayesha", "areeba"];
var lengthGuest = guestList.length;
console.log("we are  Inviting total ".concat(lengthGuest, " guest."));
//question 20
var programmingLanguage = ["Typescript", "Javascript", "Python", "PHP"];
console.log("list of Programming languages:");
programmingLanguage.forEach(function (language) { return console.log(language); });
var aiCourse = {
    courseName: "AI",
    location: "Governer house",
    onSite: 50000
};
console.log(aiCourse);
//question 22
var errorArray = ["coffee", "tea", "ice-cream", "chocolate"];
//console.log(errorArray[6]);
console.log(errorArray[3]);
//question 23 for true
var six = 6;
var nine = 9;
//test 1
console.log("test 1: six is equal to 6");
console.log(six == 6);
//test 2
console.log("\ntest 2: nine is equal to 9");
console.log(nine == 9);
//test 3
console.log("\ntest 3: nine is not equal to 7");
console.log(nine != 7);
//test 4
console.log("\ntest 4: nine is not equal to 5");
console.log(nine != 5);
//test 5
console.log("\ntest 5: nine is not equal to 1");
console.log(nine != 1);
//for false
var eight = 8;
var eleven = 11;
//test 1
console.log("\ntest 1: eight is equal to 6");
console.log(eight == 6);
//test 2
console.log("\ntest 2: eleven is equal to 9");
console.log(eleven == 9);
//test 3
console.log("\ntest 3: eleven is not equal to 11");
console.log(eleven != 11);
//test 4
console.log("\ntest 4: eight is not equal to 8");
console.log(eight != 8);
//test 5
console.log("\ntest 5: eight is equal to 11");
console.log(eight == 11);
//question 24 for equality
var blockSite = "\nblocks";
console.log("Are blocks equal to blocks?");
console.log(blockSite != "blocks");
//for unequality
var blocks = "\nblocks";
console.log("Are blocks not equal to blocks?");
console.log(blocks == "blocks");
//for upper case
var toUpperCaseApple = "APPLE";
console.log("Is apple is Equal to APPLE?");
console.log(toUpperCaseApple.toLowerCase() == "apple");
console.log("Is apple is  not Equal to APPLE?");
console.log(toUpperCaseApple.toLowerCase() != "apple");
//for numerical equal or not equal
var ten = 10;
var twenty = 20;
console.log("\nIs ten is equal to twenty");
console.log(ten == twenty);
console.log("\nIs ten is not equal to twenty");
console.log(ten != twenty);
//for greater than 
console.log("\nIs ten is greater than zero");
console.log(10 > 0);
//for less than
console.log("\nIs twenty is less than ten");
console.log(20 < 10);
//for greater than or equal to
console.log("\nIs ten is greater than or equal to five");
console.log(10 >= 5);
//for less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(20 <= 10);
//test using and & or
console.log("twenty is not equal to 10 & twenty is not greater to 10");
console.log(twenty != 10 && twenty > 10);
console.log("twenty is not equal to 10 & twenty is  greater to 30");
console.log(twenty != 10 && twenty > 30);
console.log("twenty is not equal to 10 & twenty is not greater to 15");
console.log(twenty != 10 || twenty > 15);
console.log("twenty is  equal to 20 & twenty is  greater to 30");
console.log(twenty == 20 || twenty > 30);
//by using array
var vegeTables = ["tomato", "potato", "onion"];
console.log("tomato use in food");
console.log(vegeTables.includes("tomato"));
//not include
console.log("tomato does not use in food");
console.log(!vegeTables.includes("tomato"));
//question 25 
var alienColor = "Grey";
if (alienColor === "Grey") {
    console.log("alien color is grey?");
}
var alienColor = "blue";
if (alienColor === "blue") {
    console.log("alien color is blue?");
}
//question 26
var alienColor = "violet";
if (alienColor === "violet") {
    console.log('player just earned 5 points for shooting the alien');
}
else {
    console.log('player just earned 10 points for shooting the alien');
}
// for 2nd 
var alienColor = "indigo";
if (alienColor === "indigo") {
    console.log('i am coming if statement');
}
else {
    console.log(' am coming else statement');
}
//question 27
var alienColor = "green";
if (alienColor === "green") {
    console.log("you shoot down green alien you have earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("you shoot down yellow alien you have earned 10 points");
}
else if (alienColor === "indigo") {
    console.log("you shoot down indigo  alien you have earned 15 points");
}
// version 2
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shoot down green alien you have earned 5 points");
}
if (alienColor2 === "yellow") {
    console.log("you shoot down yellow alien you have earned 10 points");
}
if (alienColor2 === "red") {
    console.log("you shoot down red alien you have earned 15 points");
}
//version 3
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you shoot down green alien you have earned 5 points");
}
if (alienColor3 === "yellow") {
    console.log("you shoot down yellow alien you have earned 10 points");
}
if (alienColor3 === "red") {
    console.log("you shoot down red alien you have earned 15 points");
}
//question 28
// creating variable
var age = 22;
if (age < 2) {
    console.log("you are baby");
}
else if (age >= 2 && age < 4) {
    console.log("you are toddler");
}
else if (age >= 4 && age < 13) {
    console.log("you are a kid");
}
else if (age >= 13 && age < 18) {
    console.log("you are a teenager");
}
else if (age >= 19 && age < 25) {
    console.log("you are an adult");
}
else if (age >= 25 && age < 50) {
    console.log("you are a elders");
}
//question 29
var favrtFruits = ["strawberry", "peach", "pineapple"];
if (favrtFruits.includes("peach")) {
    console.log("i like peach");
}
if (favrtFruits.includes("strawberry")) {
    console.log("i like strawberry");
}
if (favrtFruits.includes("pineapple")) {
    console.log("i like pineapple");
}
if (favrtFruits.includes("mango")) {
    console.log("i like peach");
}
if (favrtFruits.includes("orange")) {
    console.log("i like peach");
}
//question 30
var userName = ["asad", "ayan", "ali", "ahmed", "admin"];
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ",thanks for logging again"));
    }
});
//question 31
var userNaam = ["asad", "ayan", "ali", "ahmed", "admin"];
userName = [];
if (userNaam.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    userNaam.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ",thanks for logging again"));
        }
    });
}
//question 32 
//array current user 
var currentUser = ["eva", "eric", "john", "jasmin", "jack"];
// array new user
var newUser = ["jason", "marry", "john", "ellic", "jam"];
//loop
newUser.forEach(function (newUser) {
    var ourCondition = currentUser.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); });
    if (ourCondition) {
        console.log("sorry ".concat(newUser, " is alreay taken!"));
    }
    else {
        console.log("this user ".concat(newUser, "is available"));
    }
});
//question 33
//create an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordinalEnding = void 0;
    if (oneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinalEnding = "rd";
    }
    else if (oneNumber === 4) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 5) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 6) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 7) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 8) {
        ordinalEnding = "th";
    }
    else if (oneNumber === 9) {
        ordinalEnding = "th";
    }
    console.log("".concat(oneNumber, " ").concat(ordinalEnding));
}
//question 34
var pizza = ["fajita", "malai", "smoky", "cheese"];
for (var _a = 0, pizza_1 = pizza; _a < pizza_1.length; _a++) {
    var onePizza = pizza_1[_a];
    console.log("i like ".concat(onePizza, " pizza"));
}
// question 35
//creating array
var petAnimal = ["cat", "dog", "parrot"];
// using for-loop
for (var _b = 0, petAnimal_1 = petAnimal; _b < petAnimal_1.length; _b++) {
    var onePet = petAnimal_1[_b];
    console.log("a ".concat(onePet, " would make a great pet"));
}
// print a message for-loop
console.log("any of these would make a great pet!");
//question 36
function makeshirt(size, printMessage) {
    console.log("you select ".concat(size, " size of shirt with ").concat(printMessage, " prints on shirt"));
}
makeshirt("small", "zoha gul ");
makeshirt("medium", "zoha gul ");
makeshirt("large", "zoha gul ");
//question 37
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "small"; }
    if (printMessage === void 0) { printMessage = "we love coding "; }
    console.log("making a  ".concat(size, "  shirt with  the ").concat(printMessage, " prints on shirt"));
}
//calling a function
make_shirt("medium");
makeshirt("small", "i love javascript");
//question 38
function describeCity(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describeCity("karachi");
describeCity("lahore");
describeCity("delhi", " india");
//question 39
//return function 
function cityCountry(city, country) {
    return "".concat(city, "  ").concat(country);
}
// calling a function for return value 
console.log(cityCountry("karachi", "pakistan"));
//question 40
function makeAlbum(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling 3 function along different values
var album1 = makeAlbum("zoha", "album title 1");
var album2 = makeAlbum("zoha", "album title 2");
var album3 = makeAlbum("zoha", "album title 3");
console.log(album1);
console.log(album2);
console.log(album3);
//question 41
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toLocaleUpperCase() + magician_1.slice(1));
    }
}
var magician = ["ali", "hamza", "bilal"];
showMagicians(magician);
// question 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + 'the great ';
    }
}
var magicians2 = ["usman", "haseeb", "wajahat"];
make_great(magicians2);
showMagicians(magicians2);
//question 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the great');
    }
    return greatMagicians;
}
var magicians3 = ["usman", "haseeb", "wajahat"];
/////////////////////////////////////////////////////////
var greatMagicians2 = make_great2(magicians3);
showMagicians(magicians3);
showMagicians(greatMagicians2);
//question 44
function sandWich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i]));
    }
}
console.log("hi! enjoy your sandwich zoha gul");
sandWich("capsicum", " tomato", "chicken");
sandWich("beef", " cheese");
sandWich("garlic", " chicken", "mayo sauce");
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("toyota", "corolla", { color: "silver", "year": "2024" });
console.log(mycar);
