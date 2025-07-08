//vars
//stats
let age = 0;
let gender = "";

let financial = 0;
let wealth = "";
let job = "";

let social = 0;
let reputation = "";
let socialSkills = "";
let looks = "";

let physical = 0;
let physique = "";
let hormone = "";

let mental = 0;
let experience = "";
let intelligence = "";

//html vars
const genderOption = document.getElementById("genderOption");
const ageOption = document.getElementById("ageOption");


const wealthOption = document.getElementById("wealthOption");
const jobOption = document.getElementById("jobOption");

const reputationOption = document.getElementById("reputationOption");
const socialOption = document.getElementById("socialOption");
const looksOption = document.getElementById("looksOption");

const physiqueOptions = document.getElementById("physiqueOptions");
const hormoneOptions = document.getElementById("hormoneOptions");

const experienceOptions = document.getElementById("experienceOptions");
const intelligenceOptions = document.getElementById("intelligenceOptions");

//buttons
const calculateButton = document.getElementById("calculateButton");

const totalStatus = document.getElementById("totalStatus");

//funcs


//entrance
calculateButton.addEventListener("click", function(){
//Physical
 switch(wealthOption.value){
  case "veryPoor":
    wealth = 0;
    break;
  case "poor":
    wealth = 3;
    break;
 case "average":
    wealth = 7;
    break;
 case "aboveAverage":
    wealth = 10;
    break;
 case "rich":
    wealth = 13;
    break;
 case "veryRich":
    wealth = 16;
    break;
 case "billionaire":
    wealth = 20;
    break;
 }

 switch(jobOption.value){
  case "none":
    job = 0;
    break;
  case "basicJob":
    job = 3;
    break;
 case "averageJob":
    job = 7;
    break;
 case "successful":
    job = 10;
    break;
 case "highLevelJob":
    job = 13;
    break;
 case "successful":
    job = 16;
    break;
 case "politician":
    job = 20;
    break;
 }

financial = wealth + job;
console.log("Financial = " + financial);
console.log("Weath = " + wealth);
console.log("Job = " + job);






//Social
 switch(reputationOption.value){
  case "unkown":
    reputation = 0;
    break;
  case "few":
    reputation = 1;
    break;
 case "some":
    reputation = 3;
    break;
 case "many":
    reputation = 5;
    break;
 case "well":
    reputation = 7;
    break;
 case "incredible":
    reputation = 10;
    break;
 }

 switch(socialOption.value){
  case "awful":
    socialSkills = 0;
    break;
  case "bad":
    socialSkills = 2;
    break;
 case "average":
    socialSkills = 5;
    break;
 case "comfortable":
    socialSkills = 7;
    break;
 case "skilled":
    socialSkills = 10;
    break;
 }

 switch(looksOption.value){
  case "ugly":
    looks = 0;
    break;
  case "uncomfortable":
    looks = 3;
    break;
 case "average":
    looks = 5;
    break;
 case "good":
    looks = 7;
    break;
 case "impressive":
    looks = 10;
    break;
 }

social = reputation + socialSkills + looks;
console.log("Social = " + social);
console.log("Reputation = " + reputation);
console.log("SocialSkills = " + socialSkills);
console.log("Looks = " + looks);







//Physical
 switch(physiqueOptions.value){
  case "hideous":
    physique = 0;
    break;
  case "ugly":
    physique = 2;
    break;
 case "average":
    physique = 5;
    break;
 case "good":
    physique = 7;
    break;
 case "beautiful":
    physique = 10;
    break;
 }

 switch(hormoneOptions.value){
  case "androginous":
    hormone = 0;
    break;
  case "poor":
    hormone = 2;
    break;
 case "average":
    hormone = 5;
    break;
 case "good":
    hormone = 7;
    break;
 case "exceptional":
    hormone = 10;
    break;
 }

physical = physique + hormone;
console.log("Physical = " + physical);
console.log("Physique = " + physique);
console.log("Hormone = " + hormone);








//Mental
 switch(experienceOptions.value){
  case "naive":
    experience = 0;
    break;
  case "inexperience":
    experience = 2;
    break;
 case "average":
    experience = 5;
    break;
 case "well":
    experience = 7;
    break;
 case "master":
    experience = 10;
    break;
 }

 switch(intelligenceOptions.value){
  case "brainless":
    intelligence = 0;
    break;
  case "stupid":
    intelligence = 2;
    break;
 case "average":
    intelligence = 5;
    break;
 case "smart":
    intelligence = 7;
    break;
 case "high":
    intelligence = 10;
    break;
 }

mental = experience + intelligence;
console.log("Mental = " + mental);
console.log("Experience = " + experience);
console.log("Intelligence = " + intelligence);


//total

totalStatus.innerText = financial + social + physical + mental;

});




