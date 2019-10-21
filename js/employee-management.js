var employee_list = [["Kashish", "President", "10"], ["Chintan", "Director", "02"], ["Yash", "Manager", "05"], ["Harsh", "Vice President", "11"], ["Shivam", "Associate", "12"], ["Pritesh", "Associate", "13"]];

var $ = function (id) {
  "use strict";
  return document.getElementById(id);
}
//displays count of employees
function updateCountOfEmployees() {
  $("employeeCount").innerHTML = employee_list.length;
}

function table() {
  var table = $("employee_info");

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (var employee of employee_list) {
    table.insertRow();
    //adding data to the added row
    for (var cell of employee) {
      var newCell = table.rows[table.rows.length - 1].insertCell();
      newCell.textContent = cell;
    }

    //adding delete button at the end of the row
    var deleteCell = table.rows[table.rows.length - 1].insertCell();
    var button = document.createElement("input");
    var i = 1;
    button.class = "deleteButton";
    button.type = "button";
    button.value = "Delete";
    button.id = employee[2];

    deleteCell.appendChild(button);
    deleteCell.className = "deleteCell";
  }
  for (let index = 0; index < employee_list.length; index++) {
    $(employee_list[index][2]).addEventListener("click", deleteItem);
  }
  updateCountOfEmployees();
}

function addItem(e) {
  employee_list.push(e);
  table();
}

var deleteItem = function (e) {
  var deleteButton = e.currentTarget;
  for (let index = 0; index < employee_list.length; index++) {
    if (employee_list[index][2] == deleteButton.id) {
      employee_list.splice(index, 1);
      break;
    }
  }
  table();
}

var processEntries = function () {
  "use strict";
  var header, msg, name, title, extension;

  header = "";
  msg = "Please review your entries and complete all required fields";
  name = $("name").value;
  title = $("title").value;
  extension = $("extension").value;

  if (name === "") {
    $("errorName").innerHTML = "Required field! Please enter name.";
    header = msg;
  }
  if (title === "") {
    $("errorTitle").innerHTML = "Required field! Please enter title.";
    header = msg;
  }
  if (extension === "") {
    $("errorExtension").innerHTML = "Required field! Please enter extension.";
    header = msg;
  }
  if (header !== msg) {
    $("errorName").innerHTML = "";
    $("errorTitle").innerHTML = "";
    $("errorExtension").innerHTML = "";

    addItem([$("name").value, $("title").value, $("extension").value]);
    $("form").reset();
  }
};


window.addEventListener("load", function () {
  "use strict";
  table();
  $("add").addEventListener("click", processEntries);
});