// ToDoList

var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elResult = document.querySelector(".js-list");


function refactoringList(arr, notes){
  
  arr.forEach(item => {
    
    var newElemet = document.createElement("li");
    newElemet.classList.add("list-unstyled")
    newElemet.textContent = `${item.title} . ${item.text}`;
    notes.appendChild(newElemet);
    
  });
}

var newArr = [];

function creatingToDoList(evt){
  evt.preventDefault();
  
  elResult.textContent = "";
  var elInputValue = elInput.value.trim();
  
  newArr.push(
    {
      title: newArr.length + 1,
      text: elInputValue,

    }
  );
  elInput.value = "";
  refactoringList(newArr, elResult);
}

elForm.addEventListener("submit", creatingToDoList);