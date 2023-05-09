let bookMarksFromLS = JSON.parse(localStorage.getItem("bookMarks"));

displayTable(bookMarksFromLS);

function displayTable(bookMarksFromLS) {
  bookMarksFromLS.forEach(function (elem, index) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = elem.personName;

    let td2 = document.createElement("td");
    td2.innerText = elem.personEmail;

    let td3 = document.createElement("td");
    td3.innerText = elem.personRole;

    let td4 = document.createElement("td");
    td4.innerText = elem.personSalary;

    let td5 = document.createElement("td");
    td5.innerText = "Delete";
    td5.style.backgroundColor = "red";
    td5.style.color = "white";
    td5.style.cursor = "pointer";

    td5.addEventListener("click", function () {
      deleteData(index);
    });

    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}

function deleteData(index) {
  bookMarksFromLS.splice(index, 1);
  localStorage.setItem("bookMarks", JSON.stringify(bookMarksFromLS));
  window.location.reload();
}
