let appliedJobs = JSON.parse(localStorage.getItem("jobList"));

//Sort by name
function handleNameSort() {
  let selected = document.querySelector("#sortNames").value;

  if (selected === "Ascending") {
    appliedJobs.sort(function (a, b) {
      if (a.personName > b.personName) return 1;
      if (a.personName < b.personName) return -1;
      return 0;
    });
    displayTable(appliedJobs);
  }
  if (selected === "Descending") {
    appliedJobs.sort(function (a, b) {
      if (a.personName > b.personName) return -1;
      if (a.personName < b.personName) return 1;
      return 0;
    });
    displayTable(appliedJobs);
  }
}

//Sort by salary
function handleSalarySort() {
  let selected = document.querySelector("#sortSalary").value;
  if (selected === "High") {
    appliedJobs.sort(function (a, b) {
      return b.personSalary - a.personSalary;
      return 0;
    });
    displayTable(appliedJobs);
  }
  if (selected === "Low") {
    appliedJobs.sort(function (a, b) {
      return a.personSalary - b.personSalary;
      return 0;
    });
    displayTable(appliedJobs);
  }
}

//Filter by role
function handlefilter() {
  let selected = document.querySelector("#filter").value;

  let filteredList = appliedJobs.filter(function (elem) {
    return elem.personRole === selected;
  });
  displayTable(filteredList);
}

let bookmarkJobs = JSON.parse(localStorage.getItem("bookMarks")) || [];

displayTable(appliedJobs);

function displayTable(appliedJobs) {
  document.querySelector("tbody").innerHTML = " ";
  appliedJobs.forEach(function (elem) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = elem.personName;

    let td2 = document.createElement("td");
    td2.innerText = elem.personEmail;

    let td3 = document.createElement("td");
    td3.innerText = elem.personRole;

    let td4 = document.createElement("td");
    td4.innerText = elem.personSalary;

    let check = bookmarkJobs.filter((item) => {
      return elem.personEmail === item.personEmail;
    });

    let td5 = document.createElement("td");
    td5.innerText = "Bookmark";

    if (check.length > 0) {
      td5.style.backgroundColor = "green";
    } else {
      td5.style.backgroundColor = "red";
    }

    td5.style.color = "white";
    td5.style.cursor = "pointer";
    td5.style.fontWeight = "bold";

    td5.addEventListener("click", function () {
      bookMarkFun(elem);
      td5.style.backgroundColor = "green";
    });

    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}

function bookMarkFun(elem) {
  let check = bookmarkJobs.filter((item) => {
    return elem.personEmail === item.personEmail;
  });
  if (check.length === 0) {
    bookmarkJobs.push(elem);
    localStorage.setItem("bookMarks", JSON.stringify(bookmarkJobs));
  } else {
    alert("Already Bookmarked");
  }
}
