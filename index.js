const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameRegex = /^[a-zA-Z]{2,15}$/;
const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

firstName.addEventListener("blur", validate);
lastName.addEventListener("blur", validate);
email.addEventListener("blur", validate);
password.addEventListener("blur", validate);

function validate() {
  let re = "";
  switch (this) {
    case firstName:
      re = nameRegex;
      break;
    case lastName:
      re = nameRegex;
      break;
    case email:
      re = emailRegex;
      break;
    case password:
      re = passwordRegex;
      break;
  }

  if (!re.test(this.value)) {
    this.parentElement.classList.add("error");
    this.parentElement.nextElementSibling.classList.remove("hide");
  } else {
    this.parentElement.classList.remove("error");
    this.parentElement.nextElementSibling.classList.add("hide");
  }
}
