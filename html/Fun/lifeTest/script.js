//vars
//stats
let levelOne = 0;
let levelTwo = 0;
let levelThree = 0; 
 
let levelFour = 0;
let levelFive = 0;
let levelSix = 0;

let levelSeven = 0;
let levelEight = 0;
let levelNine = 0;

//html vars
const oneOneOption = document.getElementById("oneOneOption");
const oneTwoOption = document.getElementById("oneTwoOption");
const oneThreeOption = document.getElementById("oneThreeOption");
const oneFourOption = document.getElementById("oneFourOption");
const oneFiveOption = document.getElementById("oneFiveOption");

const twoOneOption = document.getElementById("twoOneOption");
const twoTwoOption = document.getElementById("twoTwoOption");
const twoThreeOption = document.getElementById("twoThreeOption");
const twoFourOption = document.getElementById("twoFourOption");
const twoFiveOption = document.getElementById("twoFiveOption");

const threeOneOption = document.getElementById("threeOneOption");
const threeTwoOption = document.getElementById("threeTwoOption");
const threeThreeOption = document.getElementById("threeThreeOption");
const threeFourOption = document.getElementById("threeFourOption");
const threeFiveOption = document.getElementById("threeFiveOption");

const fourOneOption = document.getElementById("fourOneOption");
const fourTwoOption = document.getElementById("fourTwoOption");
const fourThreeOption = document.getElementById("fourThreeOption");
const fourFourOption = document.getElementById("fourFourOption");
const fourFiveOption = document.getElementById("fourFiveOption");

const fiveOneOption = document.getElementById("fiveOneOption");
const fiveTwoOption = document.getElementById("fiveTwoOption");
const fiveThreeOption = document.getElementById("fiveThreeOption");
const fiveFourOption = document.getElementById("fiveFourOption");
const fiveFiveOption = document.getElementById("fiveFiveOption");

const sixOneOption = document.getElementById("sixOneOption");
const sixTwoOption = document.getElementById("sixTwoOption");
const sixThreeOption = document.getElementById("sixThreeOption");
const sixFourOption = document.getElementById("sixFourOption");
const sixFiveOption = document.getElementById("sixFiveOption");

const sevenOneOption = document.getElementById("sevenOneOption");
const sevenTwoOption = document.getElementById("sevenTwoOption");
const sevenThreeOption = document.getElementById("sevenThreeOption");
const sevenFourOption = document.getElementById("sevenFourOption");
const sevenFiveOption = document.getElementById("sevenFiveOption");

const eightOneOption = document.getElementById("eightOneOption");
const eightTwoOption = document.getElementById("eightTwoOption");
const eightThreeOption = document.getElementById("eightThreeOption");
const eightFourOption = document.getElementById("eightFourOption");
const eightFiveOption = document.getElementById("eightFiveOption");


const nineOneOption = document.getElementById("nineOneOption");
const nineTwoOption = document.getElementById("nineTwoOption");
const nineThreeOption = document.getElementById("nineThreeOption");
const nineFourOption = document.getElementById("nineFourOption");
const nineFiveOption = document.getElementById("nineFiveOption");


//buttons
const calculateButton = document.getElementById("calculateButton");

const totalStatus = document.getElementById("totalStatus");

//data structures
const choices = {strongly:2, somewhat:1, neutral:0, notMuch:-1, not:-2};

//funcs


//entrance
calculateButton.addEventListener("click", function(){
 //Physical
 levelOne = choices[oneOneOption.value] + choices[oneTwoOption.value] + choices[oneThreeOption.value] + choices[oneFourOption.value]+ choices[oneFiveOption.value];
 levelTwo = choices[twoOneOption.value] + choices[twoTwoOption.value] + choices[twoThreeOption.value] + choices[twoFourOption.value]+ choices[twoFiveOption.value];
 levelThree = choices[threeOneOption.value] + choices[threeTwoOption.value] + choices[threeThreeOption.value] + choices[threeFourOption.value]+ choices[threeFiveOption.value];
 levelFour = choices[fourOneOption.value] + choices[fourTwoOption.value] + choices[fourThreeOption.value] + choices[fourFourOption.value]+ choices[fourFiveOption.value];
 levelFive = choices[fiveOneOption.value] + choices[fiveTwoOption.value] + choices[fiveThreeOption.value] + choices[fiveFourOption.value]+ choices[fiveFiveOption.value];
 levelSix = choices[sixOneOption.value] + choices[sixTwoOption.value] + choices[sixThreeOption.value] + choices[sixFourOption.value]+ choices[sixFiveOption.value];
 levelSeven = choices[sevenOneOption.value] + choices[sevenTwoOption.value] + choices[sevenThreeOption.value] + choices[sevenFourOption.value]+ choices[sevenFiveOption.value];
 levelEight = choices[eightOneOption.value] + choices[eightTwoOption.value] + choices[eightThreeOption.value] + choices[eightFourOption.value]+ choices[eightFiveOption.value];
 levelNine = choices[nineOneOption.value] + choices[nineTwoOption.value] + choices[nineThreeOption.value] + choices[nineFourOption.value] + choices[nineFiveOption.value];

 console.log("Level one = " + levelOne);
 console.log("Level two = " + levelTwo);
 console.log("Level three = " + levelThree);
 console.log("Level four = " + levelFour);
 console.log("Level five = " + levelFive);
 console.log("Level six = " + levelSix);
 console.log("Level seven = " + levelSeven);
 console.log("Level eight = " + levelEight);
 console.log("Level nine = " + levelNine);

 totalStatus.innerText = `Level One = ${levelOne}\n 
Level Two = ${levelTwo}\n 
Level Three = ${levelThree}\n 
Level Four = ${levelFour}\n 
Level Five = ${levelFive}\n 
Level Six = ${levelSix}\n 
Level Seven = ${levelSeven}\n 
Level Eight = ${levelEight}\n
Level Nine = ${levelNine}\n`;

});




