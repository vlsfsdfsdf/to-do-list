const dailyInputBox = document.getElementById("input-box");
const dailyListContainer = document.getElementById("list-container");

const weeklyInputBox = document.getElementById("weekly-input-box");
const weeklyListContainer = document.getElementById("weekly-list-container");


// Daily tasks area
function addDailyTask() {
  const tasksCount = dailyListContainer.querySelectorAll("li").length;

  if (dailyInputBox.value === "") {
    alert("You don`t write nothing");
    return;
  }

  if (tasksCount >= 10) {
    alert("Max tasks count is 10");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = dailyInputBox.value;
  dailyListContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  dailyInputBox.value = "";
  saveData();
}
// marker task
dailyListContainer.addEventListener(
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

// Save data
function saveData() {
  localStorage.setItem("data", dailyListContainer.innerHTML);
}

function getData() {
  dailyListContainer.innerHTML = localStorage.getItem("data");
}
// btn settings
dailyInputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // срабатывает на Enter
    addDailyTask();
  }
});




// Weekly tasks area
function addWeeklyTask() {
  const tasksCount = weeklyListContainer.querySelectorAll("li").length;

  if (weeklyInputBox.value === "") {
    alert("You don`t write nothing");
    return;
  }

  if (tasksCount >= 10) {
    alert("Max tasks count is 10");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = weeklyInputBox.value;
  weeklyListContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  weeklyInputBox.value = "";
saveWeeklyData();
}

// marker task
weeklyListContainer.addEventListener(
  "click",
  // e в function это какой-то ивент который передаеться в функцию как аргумент, браузер закидывает его сам
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveWeeklyData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveWeeklyData();
    }
  },
  false,
);

// Save data
function saveWeeklyData() {
  localStorage.setItem("weeklyData", weeklyListContainer.innerHTML);
}

function getWeeklyData() {
  weeklyListContainer.innerHTML = localStorage.getItem("weeklyData");
}
// btn settings
weeklyInputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // срабатывает на Enter
    addWeeklyTask();
  }
});

getData();
getWeeklyData();