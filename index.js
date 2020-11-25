const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameRegex = /^[a-zA-Z]{2,15}$/;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

firstName.addEventListener("blur", validateFirstName);
lastName.addEventListener("blur", validateLastName);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);

// firstName.addEventListener("blur", validate(firstName));
// lastName.addEventListener("blur", validate(lastName));
// email.addEventListener("blur", validate(email));
// password.addEventListener("blur", validate(password));

// function validate(id) {
//   let re = "";
//   switch (id) {
//     case firstName:
//       re = nameRegex;
//       break;
//     case lastName:
//       re = nameRegex;
//       break;
//     case email:
//       re = emailRegex;
//       break;
//     case password:
//       re = passwordRegex;
//       break;
//   }

//   if (!re.test(id.value)) {
//     id.parentElement.classList.add("error");
//     id.parentElement.nextElementSibling.classList.remove("hide");
//   } else {
//     id.parentElement.classList.remove("error");
//     id.parentElement.nextElementSibling.classList.add("hide");
//   }
// }

function validateFirstName() {
  if (!nameRegex.test(firstName.value)) {
    firstName.parentElement.classList.add("error");
    firstName.parentElement.nextElementSibling.classList.remove("hide");
  } else {
    firstName.parentElement.classList.remove("error");
    firstName.parentElement.nextElementSibling.classList.add("hide");
  }
}
function validateLastName() {
  if (!nameRegex.test(lastName.value)) {
    lastName.parentElement.classList.add("error");
    lastName.parentElement.nextElementSibling.classList.remove("hide");
  } else {
    lastName.parentElement.classList.remove("error");
    lastName.parentElement.nextElementSibling.classList.add("hide");
  }
}
function validateEmail() {
  if (!emailRegex.test(email.value)) {
    email.parentElement.classList.add("error");
    email.parentElement.nextElementSibling.classList.remove("hide");
  } else {
    email.parentElement.classList.remove("error");
    email.parentElement.nextElementSibling.classList.add("hide");
  }
}
function validatePassword() {
  if (!passwordRegex.test(password.value)) {
    password.parentElement.classList.add("error");
    password.parentElement.nextElementSibling.classList.remove("hide");
  } else {
    password.parentElement.classList.remove("error");
    password.parentElement.nextElementSibling.classList.add("hide");
  }
}
