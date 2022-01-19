let todoList = document.querySelector('.todo__list');
let inputTodo = document.querySelector('.input__todo');
let inputBtn = document.querySelector('.add__btn');
let items = document.getElementsByClassName('delete');
console.log(items);
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', (e) => {
    if (items[i].classList[0] === 'delete') {
      e.currentTarget.parentElement.remove();
      console.log('html2', e.currentTarget);
    }
  });
}

// let items = document.querySelectorAll('.delete');

// items.forEach((element, idx) => {
//   console.log(element, idx);
//   element.addEventListener('click', () => {
//     todoList.removeChild(element.parentElement);
//   });
// });

inputBtn.addEventListener('click', () => {
  if (inputTodo.value !== '') {
    let newTodoItem = document.createElement('li');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    let content = document.createElement('div');
    content.textContent = inputTodo.value;
    content.classList.add('text__todo');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add('delete');

    newTodoItem.append(checkBox, content, deleteBtn);
    // append는 위 처럼 여러 개 추가가 가능
    newTodoItem.classList.add('todo__item');
    todoList.appendChild(newTodoItem);

    inputTodo.value = '';
    console.log('html', items);
  } else {
    alert('컨텐츠를 입력하세요.');
  }
});
