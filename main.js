const addTask = document.querySelector('.add');
const list = document.querySelector('.tasks');

let todoList = [];

// 入力値を取得
function addTodo(text) {
  const todo = {
    id: Date.now(),
    text
  }
  todoList.push(todo);
}

// 取得した値をHTMLに反映
function renderTodo() {
  let temp = '';
  todoList.forEach(todo => {
    const html = `
      <li key="${todo.id}">
        <span>${todo.text}</span>
      </li>
    `;
    temp += html;
  });

  list.innerHTML = temp;
}

// メイン処理(フォームをEnterすると発動)
addTask.addEventListener('submit', e => {
  e.preventDefault();

  const text = addTask.add.value.trim();
  if(text !== '') {
    addTodo(text)
    addTask.reset();
    renderTodo();
  }
})



