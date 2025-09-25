const taskMore = document.getElementById("taskMore");
const taskDiv = document.getElementById("taskDiv");
const taskInput1 = document.getElementById("taskInput1");
let taskIterator = 1;

//inputs
const nameInput = document.getElementById("nameInput");
const descriptionInput = document.getElementById("descriptionInput");

//radio
const majorInput = document.getElementById("majorInput");
const minorInput = document.getElementById("minorInput");

//create button
const inputButton = document.getElementById("inputButton");

//output and save
const output = document.getElementById("output");
let questsList;

//MC delete
function attachDeleteListeners() {
    document.querySelectorAll('.deleteBtn').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.outputDiv').remove();
            localStorage.setItem("questsList", output.innerHTML);
        });
    });
}


//tasks
taskMore.addEventListener("click", function(){
 taskIterator++;
 let newTask = document.createElement("div");
 newTask.className = "taskDiv";
 newTask.innerHTML = `
 <br>
  <label for="taskInput${taskIterator}">Task ${taskIterator}</label> <input type="text" name ="taskInput${taskIterator}" id="taskInput${taskIterator}"/>
 `;

 taskDiv.appendChild(newTask);

});


//load
output.innerHTML = localStorage.getItem("questsList") || `<h2>Check/Complete Quest</h2>`;
//MC
attachDeleteListeners();


//create quest
inputButton.addEventListener("click", function(){
 let outputDiv = document.createElement("div");
 outputDiv.className = "outputDiv";

 let majorMinor = "Major";

 if(majorInput.checked){majorMinor = "Major";}
 else if (minorInput.checked){majorMinor = "Minor";}

 //add text to outputDiv
 outputDiv.innerHTML = `
 <h3>Quest title: ${nameInput.value}</h3>
 <p>${majorMinor} Quest</p>
 `;

 if(descriptionInput.value){outputDiv.innerHTML += `<p>Quest description: ${descriptionInput.value}</p>`;}


 for(let i = 1; i <= taskIterator; i++){
  let input = document.getElementById(`taskInput${i}`);
  if(input.value){outputDiv.innerHTML += `Task ${i}: ${input.value} <input type="checkbox" class="task-checkbox"></input><br><br>`;}
  else{continue;}
 }

 //delete button
 outputDiv.innerHTML += `<button class="deleteBtn">Complete</button>`;
 const deleteBtn = outputDiv.querySelector(".deleteBtn");

 deleteBtn.addEventListener("click", function(){
  outputDiv.remove();

 });
 

 output.appendChild(outputDiv);

 //wipe
 nameInput.value = "";
 descriptionInput.value = "";
 majorInput.checked = true;
 //tasks
 taskInput1.value = "";
 document.querySelectorAll(".taskDiv").forEach(el => el.remove());
 taskIterator = 1;

 //MC
 attachDeleteListeners()


 //save

 localStorage.setItem("questsList", output.innerHTML);
});
