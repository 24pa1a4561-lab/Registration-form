document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let country = document.getElementById("country").value;

  // Password check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Add row to table
  let table = document.getElementById("userTable");
  table.style.display = "table";
  let row = table.insertRow(-1);
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = email;
  row.insertCell(2).innerText = phone;
  row.insertCell(3).innerText = country;

  // Reset form
  document.getElementById("registrationForm").reset();
});