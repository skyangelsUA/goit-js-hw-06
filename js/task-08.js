const formBtnInput = document.querySelector(".login-form");


formBtnInput.addEventListener("submit", inputOnSubmit);

function inputOnSubmit(input) {
  input.preventDefault();
  const {
    elements: { email, password }
  } = input.currentTarget;

  if (email.value === "" || password.value === "") {
    
    return alert('Заполните все поля!');
  } 

    
 const users = {
      email: email.value,
      password: password.value,
  }
  console.log(users);
  input.currentTarget.reset();
}