document.addEventListener("DOMContentLoaded", function () {
  console.log("page is loaded");
  const myData = localStorage.getItem("myTodoList");
  const myParsedData = JSON.parse(myData);
  if (myParsedData) {
    let tableBody = document.getElementById("myData");
    for (
      let eachTodoItem = 0;
      eachTodoItem < myParsedData.length;
      eachTodoItem++
    ) {
      let tableRow = `
      <tr>
      <td>${myParsedData[eachTodoItem]}</td>
      </tr>
      `;
      tableBody.innerHTML += tableRow;
    }
  } else {
    console.log("you dont have tasks");
  }
});

const button = document.getElementById("saveBtn");
button.addEventListener("click", function () {
  const myInput = document.getElementById("myInp").value;
  if (myInput) {
    //null == false
    saveInputData(myInput);
  }
});

function saveInputData(data) {
  const getLocalStorageData = localStorage.getItem("myTodoList");
  if (getLocalStorageData) {
    let currentData = JSON.parse(getLocalStorageData);
    currentData.push(data);
    let newDataForLocalStorage = JSON.stringify(currentData);
    localStorage.setItem("myTodoList", newDataForLocalStorage);
  } else {
    let newData = [];
    newData.push(data);
    let prepareDataForLocalStorage = JSON.stringify(newData);
    localStorage.setItem("myTodoList", prepareDataForLocalStorage);
  }
  window.location.reload();
}
