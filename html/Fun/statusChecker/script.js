//vars
//stats
let age = 0;
let gender = "";
let region = 0;

let financial = 0;
let wealth = 0;
let job = 0;

let social = 0;
let reputation = 0;
let socialSkills = 0;
let looks = 0;

let physical = 0;
let physique = 0;
let hormone = 0;

let mental = 0;
let experience = 0;
let intelligence = 0;

//html vars
const genderOption = document.getElementById("genderOption");
const ageOption = document.getElementById("ageOption");
const regionOption = document.getElementById("regionOption");

const wealthOption = document.getElementById("wealthOption");
const jobOption = document.getElementById("jobOption");

const reputationOption = document.getElementById("reputationOption");
const socialSkillsOption = document.getElementById("socialSkillsOption");
const looksOption = document.getElementById("looksOption");

const physiqueOption = document.getElementById("physiqueOptions");
const hormoneOption = document.getElementById("hormoneOptions");

const experienceOption = document.getElementById("experienceOptions");
const intelligenceOption = document.getElementById("intelligenceOptions");

//buttons
const calculateButton = document.getElementById("calculateButton");

const totalStatus = document.getElementById("totalStatus");

//data structures
const wealthObj = {veryPoor:0, poor:3, average:7, aboveAverage:10, rich:13, veryRich:16, billionaire:20};
const jobObj = {none:0, basicJob:3, averageJob:7, smallBusiness:10, highLevelJob:13, largeBusiness:16, politician:20};
 
const reputationObj = {unkown:0, few:1, some:3, many:5, well:7, incredible:10};
const socialSkillsObj = {awful:0, bad:2, average:5, comfortable:7, skilled:10};
const looksObj = {ugly:0, uncomfortable:2, average:5, good:7, impressive:10};

const physiqueObj = {horrible:0, ugly:2, average:5, good:7, beautiful:10};
const hormoneObj = {androginous:0, poor:2, average:5, good:7, exceptional:10};

const experienceObj = {naive:0, inexperience:1, average:2, well:3, master:5};
const intelligenceObj = {brainless:0, stupid:1, average:2, smart:3, high:5};

const regionObj = {first:5, second:0, third:-5};

//funcs


//entrance
calculateButton.addEventListener("click", function(){
 //Physical
 wealth = wealthObj[wealthOption.value] ?? 0;
 job = jobObj[jobOption.value] ?? 0;

 financial = wealth + job;

 console.log("Financial = " + financial);
 console.log("Weath = " + wealth);
 console.log("Job = " + job);

 //social
 reputation = reputationObj[reputationOption.value] ?? 0;
 socialSkills = socialSkillsObj[socialSkillsOption.value] ?? 0;
 looks = looksObj[looksOption.value] ?? 0;

 social = reputation + socialSkills + looks;

 console.log("Social = " + social);
 console.log("Reputation = " + reputation);
 console.log("SocialSkills = " + socialSkills);
 console.log("Looks = " + looks);

//Physical

 physique = physiqueObj[physiqueOption.value] ?? 0; 
 hormone = hormoneObj[hormoneOption.value] ?? 0;

 physical = physique + hormone;

 console.log("Physical = " + physical);
 console.log("Physique = " + physique);
 console.log("Hormone = " + hormone);

//Mental

 experience = experienceObj[experienceOption.value] ?? 0; 
 intelligence = intelligenceObj[intelligenceOption.value] ?? 0;

 mental = experience + intelligence;

 console.log("Mental = " + mental);
 console.log("Experience = " + experience);
 console.log("Intelligence = " + intelligence);

 //other
 age = ageOption.value;
 region = regionObj[regionOption.value] ?? 0;

//total

 if (genderOption.value === "male"){
  //age
  if(age > 0 && age <= 20){totalStatus.innerText = 20 - financial + social + physical + mental - region;}
  else if (age > 20){totalStatus.innerText = financial + social + physical + mental - region;}
  }

 else if(genderOption.value === "female"){
  //age
  if (age > 0 && age <= 50){totalStatus.innerText = 50 - (financial * 0.6) + (social * 1.2) + (physical * 1.4) + mental - age + region;}
  else if (age > 50){totalStatus.innerText = (financial * 0.6) + (social * 1.2) + (physical * 1.4) + mental + region;}
  
 }




});




