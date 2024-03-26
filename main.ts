///question 1

   console.log("hello world!, my name is Zoha Gul");

///question 2 personal message

let personName = "ZohaGul";
   console.log("Hello",personName,"Would you like to learn some python today?");

///question 3 name cases

let personName = "ZohaGul";
   console.log(personName. toLowerCase());

   console.log(personName. toUpperCase());

   console.log(personName. replace(/\b\w/g,(Abc)=> Abc.toUpperCase()));

///question 4 famous quote

let famousPerson = "Zoha Gul"
   console.log(famousPerson,"saying","\"When we are born, we don't have same ability but life gives us chance to increase our ability\"");

///question 5 famous quote 2

let famousPerson = "\"Zoha gul\"";
 
let message = ("\"When we are born, we don't have same ability but life gives us chance to increase our ability\"");

   console.log(famousPerson,message);

///question 6 stripping name

let spaceName = "\tZohaGul\n";

     console.log(spaceName);

let withoutspaceName = spaceName.trim();
 
    console.log(withoutspaceName);

///question 7&8 number 8
   ///addition
    console.log(4+4);
  /// subtraction
    console.log(16-8);
  /// Multiplication
    console.log(4*2);
 /// division
    console.log(64/8);

///question 9 favourite number

let favouriteNumber = 2;
let message = "my favourite number is:";

   console.log(message,favouriteNumber);

///question 10 add coments

let addComments = "\"by using frontslash/// we can Add comments easily\"";

   console.log(addComments);

/// question 11 Names by using array function

let friendsName = ["Esha","Alishba","Madiha","fiza","hina"];

   friendsName.forEach( friendsName => console.log(friendsName));

///question 12 greeting by using array and briktick

let friendsName = ["\tEsha\n","\tAlishba\n","\tMadiha\n","\tfiza\n","\thina\n"];

   friendsName.forEach( friendsName => console.log(`Hello ${friendsName} , hey! How Do you do?`));

///question 13 make own array

let transport = ["Scooty","Redbus","bike","Auto"];

 transport.forEach(transport => console.log(`I will buy my own ${transport} One day`));

 ///question 14 guest invitation list

 let guestList = ["Esha","alishba","Fiza","Madiha"];

guestList.forEach(guestlist => console.log(`Asalam-o-alikum ${guestlist} I would like to invite you at my home for dinner.`));

///question 15 for removing array by using splice

let guestlist = ["Esha","alishba","fiza","madiha"];

let cannotCome = guestlist[3];

console.log(cannotCome,"due to rain");

guestlist.splice(3,3 ,"madiha");

guestlist.forEach(guestlist => console.log (`Asalam-o-alikum ${guestlist} please you all Come on time for dinner at my home`));

///question 16  add more guest
//creating array for guest 

let guestList = ["Esha","alishba","fiza","madiha"];
//cretaing variable for those who will not come

let cannotCome = guestList [3];

console.log(cannotCome, "cannot come due to rain");

guestList.splice (3,4,"sadaf")

console.log("good news !we found a bigger table for dinner in a resturant");
guestList.unshift("saima");
guestList.push("zain");
let middleindex:number = Math.floor (guestList.length / 2);
guestList.splice(middleindex,0,"osama");
console.log("updated guest list or our Guests")
guestList.forEach(oneguest =>console.log(`salam ${oneguest},"would you like to dinner with me`));

///question 17 
let guestList = ["Esha","alishba","fiza","madiha"];
//cretaing variable for those who will not come

let cannotCome = guestList [3];

console.log(cannotCome, "cannot come due to rain");

guestList.splice (3,4,"sadaf")

console.log("good news !we found a bigger table for dinner in a resturant");
guestList.unshift("saima")
guestList.push("zain");
let middleindex:number = Math.floor (guestList.length / 2);
guestList.splice(middleindex,0,"osama");
console.log("updated guest list or our Guests")
guestList.forEach(oneguest =>console.log(`salam ${oneguest},"would you like to dinner with me`));
// message 
console.log("unfortunatly, the new dinner table will not arrive one time ,  i can invite only two persons dinner with me");
while(guestList.length > 2){
   let removedGuest =guestList.pop();
   console.log(`sorry ${removedGuest} i can not invite you for dinner`);
}
console.log("invitations to  the last  2 guests");
guestList.forEach(lasttwo => console.log (`luckly  ${lasttwo}, you are still invited to dinner `));

guestlist.pop();
guestlist.pop();

console.log("Empty list:",guestlist);


//question 18 
let countriesToVisit: string [ ] = ["saudiaarabia","indonasia","qattar","dubai"];

console.log("original  Order:", countriesToVisit);

console.log("Alphabetical Order:", [...countriesToVisit].sort());

console.log("Still in original Order:", countriesToVisit);

console.log("Reverse Order:", [...countriesToVisit].reverse());

console.log("Still in original Order:", countriesToVisit);

console.log("Original Array Reversed :", countriesToVisit.reverse());

console.log("Back to Original Order:",countriesToVisit.reverse());

console.log("Sorted in Alphabetical Order",countriesToVisit.sort());

console.log("original Array Reversed Again:", countriesToVisit.reverse());

//question 19node 

let guestList = ["hamza","usman","ayesha","areeba"];

let lengthGuest : number  =  guestList.length;

console.log(`we are  Inviting total ${lengthGuest} guest.`);

//question 20
let programmingLanguage: string [] = ["Typescript","Javascript","Python","PHP"];

console.log("list of Programming languages:")

programmingLanguage.forEach(language => console.log(language));

//question 21
interface aiCourse {
   courseName : string;
   location : string;
   onSite : number;
}
let aiCourse = {
   courseName :"AI",
   location : "Governer house",
   onSite : 50000

};
console.log(aiCourse);

//question 22
let errorArray : string [] = ["coffee","tea","ice-cream","chocolate"];
//console.log(errorArray[6]);
console.log(errorArray[3]);

//question 23 for true
let six = 6;
let nine = 9;
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
let eight = 8;
let eleven = 11;
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
let blockSite = "\nblocks";
console.log("Are blocks equal to blocks?");
console.log(blockSite != "blocks");

//for unequality
let blocks:string = "\nblocks";
console.log("Are blocks not equal to blocks?");
console.log(blocks == "blocks");

//for upper case
let toUpperCaseApple = "APPLE";
console.log("Is apple is Equal to APPLE?");
console.log(toUpperCaseApple.toLowerCase()=="apple");

console.log("Is apple is  not Equal to APPLE?");
console.log(toUpperCaseApple.toLowerCase()!="apple");
//for numerical equal or not equal
let ten = 10;
let twenty = 20;

console.log("\nIs ten is equal to twenty")
console.log(ten==twenty)
console.log("\nIs ten is not equal to twenty")
console.log(ten!=twenty)
//for greater than 
console.log("\nIs ten is greater than zero")
console.log(10>0);
//for less than
console.log("\nIs twenty is less than ten");
console.log(20<10);

//for greater than or equal to
console.log("\nIs ten is greater than or equal to five");
console.log(10>=5);

//for less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(20<=10);
//test using and & or

console.log("twenty is not equal to 10 & twenty is not greater to 10");
console.log(twenty != 10 &&  twenty > 10);

console.log("twenty is not equal to 10 & twenty is  greater to 30");
console.log(twenty != 10 &&  twenty > 30);

console.log("twenty is not equal to 10 & twenty is not greater to 15");
console.log(twenty != 10 ||  twenty > 15);

console.log("twenty is  equal to 20 & twenty is  greater to 30");
console.log(twenty == 20||  twenty > 30);
//by using array
let vegeTables =["tomato", "potato","onion"];
console.log("tomato use in food");
console.log(vegeTables.includes("tomato"));
//not include
console.log("tomato does not use in food");
console.log(!vegeTables.includes("tomato"));

//question 25 
let alienColor = "Grey";
if (alienColor === "Grey"){
   console.log("alien color is grey?");
}
let alienColor = "blue";
if (alienColor === "blue"){
   console.log("alien color is blue?");
}
//question 26
let alienColor ="violet";
if (alienColor === "violet"){
   console.log('player just earned 5 points for shooting the alien');
}
else{
   console.log('player just earned 10 points for shooting the alien');
}
// for 2nd 
let alienColor ="indigo";
if (alienColor === "indigo"){
   console.log('i am coming if statement');
}
else{
   console.log(' am coming else statement');
}
//question 27
let alienColor ="green";
if(alienColor === "green"){
   console.log("you shoot down green alien you have earned 5 points");
}
else if (alienColor === "yellow"){
   console.log("you shoot down yellow alien you have earned 10 points");
}
else if (alienColor === "indigo"){
   console.log("you shoot down indigo  alien you have earned 15 points");

}
// version 2
let alienColor2 = "yellow";
if (alienColor2 ==="green"){
   console.log("you shoot down green alien you have earned 5 points");
}
if (alienColor2 ==="yellow"){
   console.log("you shoot down yellow alien you have earned 10 points");
}
if (alienColor2 ==="red"){
   console.log("you shoot down red alien you have earned 15 points");
}
//version 3
let alienColor3 = "red";
if (alienColor3 ==="green"){
   console.log("you shoot down green alien you have earned 5 points");
}
if (alienColor3 ==="yellow"){
   console.log("you shoot down yellow alien you have earned 10 points");
}
if (alienColor3 ==="red"){
   console.log("you shoot down red alien you have earned 15 points");
}
//question 28
// creating variable
let age = 22;
if (age < 2){
   console.log("you are baby");
}
else if (age >= 2 &&  age < 4){
   console.log("you are toddler");
}
else if (age >= 4 &&  age < 13){
   console.log("you are a kid");
}
else if (age >= 13 &&  age < 18){
   console.log("you are a teenager");
}
else if (age >= 19 &&  age < 25){
   console.log("you are an adult");
}
else if (age >= 25 &&  age < 50){
   console.log("you are a elders");
}
//question 29
let favrtFruits = ["strawberry","peach","pineapple"];
if ( favrtFruits.includes("peach")){
   console.log("i like peach");
}
if ( favrtFruits.includes("strawberry")){
   console.log("i like strawberry");
}
if ( favrtFruits.includes("pineapple")){
   console.log("i like pineapple");
}
if ( favrtFruits.includes("mango")){
   console.log("i like peach");
}
if ( favrtFruits.includes("orange")){
   console.log("i like peach");
}
//question 30
let userName = ["asad","ayan","ali","ahmed","admin"];
userName.forEach(oneUser =>{
   if(oneUser === "admin"){
      console.log(`hello ${oneUser},would you like to see a status report?`)}
      else{
      console.log(`hello ${oneUser},thanks for logging again`)}
      })
      //question 31
      let userNaam = ["asad","ayan","ali","ahmed","admin"];
      userName = []

   if(userNaam.length === 0){
      console.log("your array is empty we need to find some users!")}
      else{
         userNaam.forEach(oneUser =>{
            if(oneUser === "admin"){
               console.log(`hello ${oneUser},would you like to see a status report?`)}
               else{
               console.log(`hello ${oneUser},thanks for logging again`)}
               })}

//question 32 
//array current user 
let currentUser = ["eva","eric","john","jasmin","jack"];
// array new user
let newUser = ["jason","marry","john","ellic","jam"];
//loop
newUser.forEach(newUser =>{
   let ourCondition =currentUser.some(currentUser => currentUser.toLowerCase()===newUser.toLowerCase())
   if(ourCondition){
      console.log(`sorry ${newUser} is alreay taken!`)
   }
   else{
      console.log(`this user ${newUser}is available`)
}
})
//question 33
//create an array
let numbers = [1,2,3,4,5,6,7,8,9]
//for loop
for( let oneNumber of numbers){
let ordinalEnding : string ;
if (oneNumber === 1){
   ordinalEnding = "st"
}
else if (oneNumber === 2){
   ordinalEnding = "nd"
}
else if (oneNumber === 3){
   ordinalEnding = "rd"
}
else if (oneNumber === 4){
   ordinalEnding = "th"
}
else if (oneNumber === 5){
   ordinalEnding = "th"
}
else if (oneNumber === 6){
   ordinalEnding = "th"
}
else if (oneNumber === 7){
   ordinalEnding = "th"
}
else if (oneNumber === 8){
   ordinalEnding = "th"
}
else if (oneNumber === 9){
   ordinalEnding = "th"
}
console.log(`${oneNumber} ${ordinalEnding}`);
}
//question 34
let pizza =["fajita","malai","smoky","cheese"]

for (let onePizza of pizza){
   console.log(`i like ${onePizza} pizza`);

}
// question 35
//creating array
let petAnimal = ["cat","dog","parrot"]
// using for-loop
for (let onePet of petAnimal){
console.log(`a ${onePet} would make a great pet`)

}
// print a message for-loop
console.log("any of these would make a great pet!");
//question 36
function makeshirt (size : string , printMessage : string){
   console.log(`you select ${size} size of shirt with ${printMessage} prints on shirt`)
}
makeshirt ("small", "zoha gul ")
makeshirt ("medium", "zoha gul ")
makeshirt ("large", "zoha gul ")

//question 37
function make_shirt (size : string = "small", printMessage : string ="we love coding "){
   console.log(`making a  ${size}  shirt with  the ${printMessage} prints on shirt`)
}
//calling a function
make_shirt("medium");
makeshirt("small","i love javascript")

//question 38
function describeCity(city: string , country : string  = "pakistan"){
   console.log(`${city} is in ${country}`);

}
describeCity ("karachi");
describeCity ("lahore");
describeCity ("delhi"," india");

//question 39
//return function 
function cityCountry (city: string , country : string) : string {
   return `${city}  ${country}`;

}
// calling a function for return value 
console.log (cityCountry ( "karachi","pakistan"));

//question 40
function makeAlbum( artistName : string , albumTitle : string , tracks? : number ){
   let album : {artist : string , title : string , tracks? : number} ={

      artist : artistName ,
      title : albumTitle ,
   }
if ( tracks!==undefined){
album.tracks = tracks;

}
return album;

}
// calling 3 function along different values
let album1= makeAlbum( "zoha","album title 1");
let album2= makeAlbum( "zoha","album title 2");
let album3= makeAlbum( "zoha","album title 3");

console.log(album1)
console.log(album2)
console.log(album3)

//question 41
function showMagicians (magicians : string[]):void { 
for (const magician of magicians){
   console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
}
}
const magician :string [] = ["ali","hamza","bilal"];
showMagicians (magician)

// question 42

function make_great (magicians : string []):void {
for (let i = 0; i < magicians.length ; i ++ )
{magicians [i] = magicians [i] + 'the great '


}}

const magicians2 : string[] = ["usman","haseeb","wajahat"];
make_great(magicians2)
showMagicians(magicians2)

//question 43
function make_great2(magicians : string []): string []{
const greatMagicians : string[] =[];
for (let i = 0; i < magicians.length; i ++ ){
greatMagicians.push (magicians[i] + 'the great');

}
return greatMagicians;
} 

const magicians3 : string[] = ["usman","haseeb","wajahat"];

/////////////////////////////////////////////////////////
const greatMagicians2 : string[] = make_great2 (magicians3);
showMagicians(magicians3);
showMagicians(greatMagicians2);

//question 44
function sandWich (...items: string[]):void{
console.log("sandwich order:")
for (let i = 0; i <items.length ; i ++){
   console.log(`-${items[i]}`)
}

}
console.log("hi! enjoy your sandwich zoha gul")
sandWich("capsicum"," tomato","chicken");
sandWich("beef"," cheese");
sandWich("garlic"," chicken","mayo sauce");

//question 45
type car ={
   manufacture : string 
   model: string
   [key: string] : any ;
}
function createCar(manufacture:string, model: string, optional: Record<string , any>): car{

   return{
      manufacture,
      model ,
      ...optional
   }
}
const mycar: car= createCar("toyota","corolla",{color: "silver" ,"year" : "2024"});
console.log(mycar);

                                   ///assignment done////
