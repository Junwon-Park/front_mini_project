let loginBtn = document.querySelector('.btn__login');
let signUpBtn = document.querySelector('.btn__signup');
let todoBtn = document.querySelector('.btn__todo');
console.log(loginBtn);
console.log(signUpBtn);
console.log(todoBtn);

loginBtn.addEventListener('click', () => {
  location.assign('../login_page/login.html');
});

signUpBtn.addEventListener('click', () => {
  location.assign('../signup_page/signup.html');
});

todoBtn.addEventListener('click', () => {
  location.assign('../todo_page/todo.html');
});
