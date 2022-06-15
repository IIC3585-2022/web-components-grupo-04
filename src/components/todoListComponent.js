const template = document.createElement('template');

template.innerHTML = `
  <style>
    .prompt {
      display: flex;
      align-items: center;
      max-width: 500px;
      justify-content: space-around;
    }
    
    .btn {
      width: 30px;
      height: 30px;
      color: gray;
      font-size: 20px;
      border: 3px solid gray;
      text-align: center;
      border-radius: 35px;
    }
  </style>
  <div class="todo-list">
    <h1></h1>
    <div id="list-item">
    </div>
    <div class="prompt">
      <h4></h4>
      <input type="text" id="input-task">
      <button id="add-button" class="btn">+</button>
    </div>
  </div>
`;

class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('titulo');
    this.shadowRoot.querySelector('h4').innerText = `${this.getAttribute('prompt')} :`;

    const item1 = document.createElement("todo-item");
    const item1TaskName = document.createAttribute("task-name");
    item1TaskName.value = this.getAttribute("item1");
    item1.setAttributeNode(item1TaskName);
    this.shadowRoot.getElementById("list-item").appendChild(item1);

    const item2 = document.createElement("todo-item");
    const item2TaskName = document.createAttribute("task-name");
    item2TaskName.value = this.getAttribute("item2");
    item2.setAttributeNode(item2TaskName);
    this.shadowRoot.getElementById("list-item").appendChild(item2);

    const item3 = document.createElement("todo-item");
    const item3TaskName = document.createAttribute("task-name");
    item3TaskName.value = this.getAttribute("item3");
    item3.setAttributeNode(item3TaskName);
    this.shadowRoot.getElementById("list-item").appendChild(item3);

    this.shadowRoot.getElementById("add-button").addEventListener("click", (e) => this.createItem(e));
  }

  createItem(e){
    const text = this.shadowRoot.getElementById("input-task").value;
    if (text.length > 0) {
      const item = document.createElement("todo-item");
      const itemTaskName = document.createAttribute("task-name");
      itemTaskName.value = text;
      item.setAttributeNode(itemTaskName);
      this.shadowRoot.getElementById("list-item").appendChild(item);
      this.shadowRoot.getElementById("input-task").value = "";
    }
  }
}

window.customElements.define('todo-list', TodoList);