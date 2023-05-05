let inputList = document.getElementById("inputList");
let listContainer = document.getElementById("listContainer");
  let ADD = document.createElement("button");
  ADD.textContent = "ADD";
  ADD.id="ADD";
  document.body.appendChild(ADD);
  let all = document.createElement("button");
  all.textContent = "All Tasks";
  all.id="AllTasks";
  document.body.appendChild(all);
   
  let pending = document.createElement("button");
  pending.textContent = "Pending Tasks";
  pending.id="PendingTasks";
  document.body.appendChild(pending);

  let completed = document.createElement("button");
  completed.textContent = "Completed Tasks";
  completed.id="CompletedTasks";
  document.body.appendChild(completed);

inputList.addEventListener("change",() =>{
  let list = document.createElement("div");
  list.className = "list"
  listContainer.appendChild(list);
  let checkbox = document.createElement("input");
  checkbox.className = "checkbox";
  checkbox.type = "checkbox";
  checkbox.id = Math.random().toFixed(3);
  list.appendChild(checkbox);

  let listValue = document.createElement("div");
  listValue.className = "label";
  listValue.innerHTML = inputList.value;
  listValue.setAttribute("for",checkbox.id);
list.appendChild(listValue);

  checkbox.addEventListener("click", () =>{
     if(checkbox.checked == true){
         listValue.style.textDecoration = "line-through";
     }
     else{
         listValue.style.textDecoration = "none";
     }
  });
  
  all.addEventListener("click", () =>{
    if(checkbox.checked == false || checkbox.checked == true){
    list.style.display = "block";
} 
});

  pending.addEventListener("click", () =>{
    if(checkbox.checked == false){
    list.style.display = "block";
} else{
    list.style.display = "none";
}
});

  completed.addEventListener("click", () =>{
    if(checkbox.checked == true){
    list.style.display = "block";
} else{
    list.style.display = "none";
}
});

  
  let threeDotBtn = document.createElement("button");
  threeDotBtn.textContent = "...";
  threeDotBtn.className="dotBtn";
  list.appendChild(threeDotBtn);

threeDotBtn.addEventListener("click", () =>{
   threeDotBtn.style.display = "none";
   let btnContainer = document.createElement("div");
   btnContainer.className = "btnContainer";
   list.appendChild(btnContainer);

  let cross = document.createElement("button");
  cross.textContent = "X";
  cross.className="cross";
  btnContainer.appendChild(cross);

  cross.addEventListener("click" ,() => {
  threeDotBtn.style.display = "inline";
  btnContainer.remove();

});
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete Task";
deleteBtn.className="DeleteBtn";
btnContainer.appendChild(deleteBtn);

deleteBtn.addEventListener("click" ,() => {
 list.remove();
})

let editBtn = document.createElement("button");
editBtn.textContent = "Edit Task";
editBtn.className="editBtn";
btnContainer.appendChild(editBtn);

editBtn.addEventListener("click" ,() => {
   btnContainer.remove();
   threeDotBtn.style.display = "inline";
   let editContainer = document.createElement("div");
   editContainer.className="editContainer";
   document.body.appendChild(editContainer);

  editContainer.appendChild(cross);
  
  cross.addEventListener("click" ,() => {
  editContainer.remove();
});

cross.style.cssText = `position: absolute; top: 5px; left: 250px`;

let editInput = document.createElement("input");
editInput.placeholder = "Change  a task";
editInput.id = "editInput";
editContainer.appendChild(editInput);

editInput.value = listValue.innerHTML;

let editTask = document.createElement("button");
editTask.textContent = "Edit Task";
editTask.className="editBtn";
editContainer.appendChild(editTask);

editTask.style.cssText = `position: absolute; top: 94px; left: 20px`;

editTask.addEventListener("click" ,() => {
  listValue.innerHTML = editInput.value;
  editContainer.remove();

})

editInput.addEventListener("change" ,() => {
  if(editInput.value == ""){
   editTask.disabled = true;
} else{
   editTask.disabled = false;
}
});

editContainer.appendChild(deleteBtn);
deleteBtn.style.cssText = `position: absolute; top: 63px; left: 21px`;
})

});

inputList.value = "";
});