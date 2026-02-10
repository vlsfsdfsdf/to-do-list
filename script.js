const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const tasksCount = listContainer.querySelectorAll("li").length;

  if (inputBox.value === "") {
    alert("You don`t write nothing");
    return;
  }

  if (tasksCount >= 10) {
    alert("Max tasks count is 10");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
    "click",
    // e в function это какой-то ивент который передаеться в функцию как аргумент, браузер закидывает его сам
  function (e) {         
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false,
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();
