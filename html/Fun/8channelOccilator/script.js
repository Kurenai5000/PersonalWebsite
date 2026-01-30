//obj
const chakras = {root:194.18, sacral:210.42, solar:126.22, heart:136.10, throat:141.27, eye:221.23, crown:172.06};
const planets = {saturn:147.85, jupiter:183.58, mars:211.44, sun:126.22, venus:221.23, mercury:281.63, moon:153.18};


//1
let audioContent1 = null
let oscillator1 = null;
let gainNode1 = null;

const title1 = document.getElementById("title1");
const volume1 = document.getElementById("volume1");
const num1 = document.getElementById("num1");
const btn1 = document.getElementById("btn1");
const chakra1 = document.getElementById("chakra1");
const planet1 = document.getElementById("planet1");

let occ1Tog = false;

//func
btn1.addEventListener("click", function(){
 //turn on if off
 if(!occ1Tog){
 audioContent1 = new AudioContext();
 //oscillator
 oscillator1 = audioContent1.createOscillator();
 gainNode1 = audioContent1.createGain();

 oscillator1.type = "sine";
 //connect
 oscillator1.connect(gainNode1);
 gainNode1.connect(audioContent1.destination);

 //set freq
 if(num1.value){oscillator1.frequency.setValueAtTime(num1.value, audioContent1.currentTime);
  title1.textContent = `Oscillator 1 - ${num1.value}hz`;
 }
 else if(chakra1.value !== "none"){oscillator1.frequency.setValueAtTime(chakras[chakra1.value], audioContent1.currentTime);
  title1.textContent = `Oscillator 1 - ${chakras[chakra1.value]}hz`;
 }
 else if(planet1.value !== "none"){oscillator1.frequency.setValueAtTime(planets[planet1.value], audioContent1.currentTime);
  title1.textContent = `Oscillator 1 - ${planets[planet1.value]}hz`;
 }


 //turn on
 gainNode1.gain.setValueAtTime(volume1.value /100, audioContent1.currentTime)
 oscillator1.start();
 //reset stuff
 occ1Tog = true;
 btn1.textContent ="On"}

 else if(occ1Tog){
 oscillator1.stop();
 occ1Tog = false;
 btn1.textContent ="Off"
 }
 
});

//2
let audioContent2 = null
let oscillator2 = null;
let gainNode2 = null;

const title2 = document.getElementById("title2");
const volume2 = document.getElementById("volume2");
const num2 = document.getElementById("num2");
const btn2 = document.getElementById("btn2");
const chakra2 = document.getElementById("chakra2");
const planet2 = document.getElementById("planet2");

let occ2Tog = false;

//func
btn2.addEventListener("click", function(){
 //turn on if off
 if(!occ2Tog){
 audioContent2 = new AudioContext();
 //oscillator
 oscillator2 = audioContent2.createOscillator();
 gainNode2 = audioContent2.createGain();

 oscillator2.type = "sine";
 //connect
 oscillator2.connect(gainNode2);
 gainNode2.connect(audioContent2.destination);

 //set freq
 if(num2.value){oscillator2.frequency.setValueAtTime(num2.value, audioContent2.currentTime);
  title2.textContent = `Oscillator 2 - ${num2.value}hz`;
 }
 else if(chakra2.value !== "none"){oscillator2.frequency.setValueAtTime(chakras[chakra2.value], audioContent2.currentTime);
  title2.textContent = `Oscillator 2 - ${chakras[chakra2.value]}hz`;
 }
 else if(planet2.value !== "none"){oscillator2.frequency.setValueAtTime(planets[planet2.value], audioContent2.currentTime);
  title2.textContent = `Oscillator 2 - ${planets[planet2.value]}hz`;
 }


 //turn on
 gainNode2.gain.setValueAtTime(volume2.value /100, audioContent2.currentTime)
 oscillator2.start();
 //reset stuff
 occ2Tog = true;
 btn2.textContent ="On"}

 else if(occ2Tog){
 oscillator2.stop();
 occ2Tog = false;
 btn2.textContent ="Off"
 }
 
});

//3
let audioContent3 = null
let oscillator3 = null;
let gainNode3 = null;

const title3 = document.getElementById("title3");
const volume3 = document.getElementById("volume3");
const num3 = document.getElementById("num3");
const btn3 = document.getElementById("btn3");
const chakra3 = document.getElementById("chakra3");
const planet3 = document.getElementById("planet3");

let occ3Tog = false;

//func
btn3.addEventListener("click", function(){
 //turn on if off
 if(!occ3Tog){
 audioContent3 = new AudioContext();
 //oscillator
 oscillator3 = audioContent3.createOscillator();
 gainNode3 = audioContent3.createGain();

 oscillator3.type = "sine";
 //connect
 oscillator3.connect(gainNode3);
 gainNode3.connect(audioContent3.destination);

 //set freq
 if(num3.value){oscillator3.frequency.setValueAtTime(num3.value, audioContent3.currentTime);
  title3.textContent = `Oscillator 3 - ${num3.value}hz`;
 }
 else if(chakra3.value !== "none"){oscillator3.frequency.setValueAtTime(chakras[chakra3.value], audioContent3.currentTime);
  title3.textContent = `Oscillator 3 - ${chakras[chakra3.value]}hz`;
 }
 else if(planet3.value !== "none"){oscillator3.frequency.setValueAtTime(planets[planet3.value], audioContent3.currentTime);
  title3.textContent = `Oscillator 3 - ${planets[planet3.value]}hz`;
 }


 //turn on
 gainNode3.gain.setValueAtTime(volume3.value /100, audioContent3.currentTime)
 oscillator3.start();
 //reset stuff
 occ3Tog = true;
 btn3.textContent ="On"}

 else if(occ3Tog){
 oscillator3.stop();
 occ3Tog = false;
 btn3.textContent ="Off"
 }
 
});

//4
let audioContent4 = null
let oscillator4 = null;
let gainNode4 = null;

const title4 = document.getElementById("title4");
const volume4 = document.getElementById("volume4");
const num4 = document.getElementById("num4");
const btn4 = document.getElementById("btn4");
const chakra4 = document.getElementById("chakra4");
const planet4 = document.getElementById("planet4");

let occ4Tog = false;

//func
btn4.addEventListener("click", function(){
 //turn on if off
 if(!occ4Tog){
 audioContent4 = new AudioContext();
 //oscillator
 oscillator4 = audioContent4.createOscillator();
 gainNode4 = audioContent4.createGain();

 oscillator4.type = "sine";
 //connect
 oscillator4.connect(gainNode4);
 gainNode4.connect(audioContent4.destination);

 //set freq
 if(num4.value){oscillator4.frequency.setValueAtTime(num4.value, audioContent4.currentTime);
  title4.textContent = `Oscillator 4 - ${num4.value}hz`;
 }
 else if(chakra4.value !== "none"){oscillator4.frequency.setValueAtTime(chakras[chakra4.value], audioContent4.currentTime);
  title4.textContent = `Oscillator 4 - ${chakras[chakra4.value]}hz`;
 }
 else if(planet4.value !== "none"){oscillator4.frequency.setValueAtTime(planets[planet4.value], audioContent4.currentTime);
  title4.textContent = `Oscillator 4 - ${planets[planet4.value]}hz`;
 }


 //turn on
 gainNode4.gain.setValueAtTime(volume4.value /100, audioContent4.currentTime)
 oscillator4.start();
 //reset stuff
 occ4Tog = true;
 btn4.textContent ="On"}

 else if(occ4Tog){
 oscillator4.stop();
 occ4Tog = false;
 btn4.textContent ="Off"
 }
 
});

//5
let audioContent5 = null
let oscillator5 = null;
let gainNode5 = null;

const title5 = document.getElementById("title5");
const volume5 = document.getElementById("volume5");
const num5 = document.getElementById("num5");
const btn5 = document.getElementById("btn5");
const chakra5 = document.getElementById("chakra5");
const planet5 = document.getElementById("planet5");

let occ5Tog = false;

//func
btn5.addEventListener("click", function(){
 //turn on if off
 if(!occ5Tog){
 audioContent5 = new AudioContext();
 //oscillator
 oscillator5 = audioContent5.createOscillator();
 gainNode5 = audioContent5.createGain();

 oscillator5.type = "sine";
 //connect
 oscillator5.connect(gainNode5);
 gainNode5.connect(audioContent5.destination);

 //set freq
 if(num5.value){oscillator5.frequency.setValueAtTime(num5.value, audioContent5.currentTime);
  title5.textContent = `Oscillator 5 - ${num5.value}hz`;
 }
 else if(chakra5.value !== "none"){oscillator5.frequency.setValueAtTime(chakras[chakra5.value], audioContent5.currentTime);
  title5.textContent = `Oscillator 5 - ${chakras[chakra5.value]}hz`;
 }
 else if(planet5.value !== "none"){oscillator5.frequency.setValueAtTime(planets[planet5.value], audioContent5.currentTime);
  title5.textContent = `Oscillator 5 - ${planets[planet5.value]}hz`;
 }


 //turn on
 gainNode5.gain.setValueAtTime(volume5.value /100, audioContent5.currentTime)
 oscillator5.start();
 //reset stuff
 occ5Tog = true;
 btn5.textContent ="On"}

 else if(occ5Tog){
 oscillator5.stop();
 occ5Tog = false;
 btn5.textContent ="Off"
 }
 
});

//6
let audioContent6 = null
let oscillator6 = null;
let gainNode6 = null;

const title6 = document.getElementById("title6");
const volume6 = document.getElementById("volume6");
const num6 = document.getElementById("num6");
const btn6 = document.getElementById("btn6");
const chakra6 = document.getElementById("chakra6");
const planet6 = document.getElementById("planet6");

let occ6Tog = false;

//func
btn6.addEventListener("click", function(){
 //turn on if off
 if(!occ6Tog){
 audioContent6 = new AudioContext();
 //oscillator
 oscillator6 = audioContent6.createOscillator();
 gainNode6 = audioContent6.createGain();

 oscillator6.type = "sine";
 //connect
 oscillator6.connect(gainNode6);
 gainNode6.connect(audioContent6.destination);

 //set freq
 if(num6.value){oscillator6.frequency.setValueAtTime(num6.value, audioContent6.currentTime);
  title6.textContent = `Oscillator 6 - ${num6.value}hz`;
 }
 else if(chakra6.value !== "none"){oscillator6.frequency.setValueAtTime(chakras[chakra6.value], audioContent6.currentTime);
  title6.textContent = `Oscillator 6 - ${chakras[chakra6.value]}hz`;
 }
 else if(planet6.value !== "none"){oscillator6.frequency.setValueAtTime(planets[planet6.value], audioContent6.currentTime);
  title6.textContent = `Oscillator 6 - ${planets[planet6.value]}hz`;
 }


 //turn on
 gainNode6.gain.setValueAtTime(volume6.value /100, audioContent6.currentTime)
 oscillator6.start();
 //reset stuff
 occ6Tog = true;
 btn6.textContent ="On"}

 else if(occ6Tog){
 oscillator6.stop();
 occ6Tog = false;
 btn6.textContent ="Off"
 }
 
});

//7
let audioContent7 = null
let oscillator7 = null;
let gainNode7 = null;

const title7 = document.getElementById("title7");
const volume7 = document.getElementById("volume7");
const num7 = document.getElementById("num7");
const btn7 = document.getElementById("btn7");
const chakra7 = document.getElementById("chakra7");
const planet7 = document.getElementById("planet7");

let occ7Tog = false;

//func
btn7.addEventListener("click", function(){
 //turn on if off
 if(!occ7Tog){
 audioContent7 = new AudioContext();
 //oscillator
 oscillator7 = audioContent7.createOscillator();
 gainNode7 = audioContent7.createGain();

 oscillator7.type = "sine";
 //connect
 oscillator7.connect(gainNode7);
 gainNode7.connect(audioContent7.destination);

 //set freq
 if(num7.value){oscillator7.frequency.setValueAtTime(num7.value, audioContent7.currentTime);
  title7.textContent = `Oscillator 7 - ${num7.value}hz`;
 }
 else if(chakra7.value !== "none"){oscillator7.frequency.setValueAtTime(chakras[chakra7.value], audioContent7.currentTime);
  title7.textContent = `Oscillator 7 - ${chakras[chakra7.value]}hz`;
 }
 else if(planet7.value !== "none"){oscillator7.frequency.setValueAtTime(planets[planet7.value], audioContent7.currentTime);
  title7.textContent = `Oscillator 7 - ${planets[planet7.value]}hz`;
 }


 //turn on
 gainNode7.gain.setValueAtTime(volume7.value /100, audioContent7.currentTime)
 oscillator7.start();
 //reset stuff
 occ7Tog = true;
 btn7.textContent ="On"}

 else if(occ7Tog){
 oscillator7.stop();
 occ7Tog = false;
 btn7.textContent ="Off"
 }
 
});

//8
let audioContent8 = null
let oscillator8 = null;
let gainNode8 = null;

const title8 = document.getElementById("title8");
const volume8 = document.getElementById("volume8");
const num8 = document.getElementById("num8");
const btn8 = document.getElementById("btn8");
const chakra8 = document.getElementById("chakra8");
const planet8 = document.getElementById("planet8");

let occ8Tog = false;

//func
btn8.addEventListener("click", function(){
 //turn on if off
 if(!occ8Tog){
 audioContent8 = new AudioContext();
 //oscillator
 oscillator8 = audioContent8.createOscillator();
 gainNode8 = audioContent8.createGain();

 oscillator8.type = "sine";
 //connect
 oscillator8.connect(gainNode8);
 gainNode8.connect(audioContent8.destination);

 //set freq
 if(num8.value){oscillator8.frequency.setValueAtTime(num8.value, audioContent8.currentTime);
  title8.textContent = `Oscillator 8 - ${num8.value}hz`;
 }
 else if(chakra8.value !== "none"){oscillator8.frequency.setValueAtTime(chakras[chakra8.value], audioContent8.currentTime);
  title8.textContent = `Oscillator 8 - ${chakras[chakra8.value]}hz`;
 }
 else if(planet8.value !== "none"){oscillator8.frequency.setValueAtTime(planets[planet8.value], audioContent8.currentTime);
  title8.textContent = `Oscillator 8 - ${planets[planet8.value]}hz`;
 }


 //turn on
 gainNode8.gain.setValueAtTime(volume8.value /100, audioContent8.currentTime)
 oscillator8.start();
 //reset stuff
 occ8Tog = true;
 btn8.textContent ="On"}

 else if(occ8Tog){
 oscillator8.stop();
 occ8Tog = false;
 btn8.textContent ="Off"
 }
 
});


