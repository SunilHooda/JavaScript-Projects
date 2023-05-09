document.querySelector("form").addEventListener("submit", myJobApp);
let jobArr = JSON.parse(localStorage.getItem("jobList")) || [];
function myJobApp(event) {
  event.preventDefault();

  let jobObj = {
    personName: document.querySelector("#name").value,
    personEmail: document.querySelector("#email").value,
    personRole: document.querySelector("#role").value,
    personSalary: document.querySelector("#salary").value,
  };
  jobArr.push(jobObj);
  localStorage.setItem("jobList", JSON.stringify(jobArr));
  document.querySelector("form").reset();
  alert("Job added successfully");
}
