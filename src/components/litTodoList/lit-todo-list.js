import {LitElement, html, css} from 'lit';

export class LitToDoList extends LitElement {
  static properties = {
    _listItems: {state: true},
  };
  static styles = css`
    .todos-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 30px;

    }
    .todo-card {
      width: 50%;
      max-width: 500px;
      display:flex;
      justify-content: space-between;
      font-family: 'Arial', sans-serif;
      fony-weight: bold;
      background: #f4f4f4;
      margin-bottom: 30px;
      margin-left: 40px;
      padding: 1rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 5px;

    }
    .todo-button{
      width: 30px;
      height: 30px;
      color: gray;
      background-color: white;
      font-size: 20px;
      border: 3px solid gray;
      text-align: center;
      border-radius: 35px;
    }
    .add-todos-container {
      display: flex;
      margin-top: 1.5rem;
      margin-left: 40px;
    }
    label {
      display: flex;
      font-size: 1em;
      align-self:center;
    }
    input{
      align-self: center;
      justify-self: center;
      margin: 0 0.5rem 0 0.5rem;
    }
  `;

  constructor() {
    super();
    this._listItems = [
      {text: 'Algo olvidado'}
    ];

  }

  render() {
    const items = this._listItems;

    const todoCard = (item) => { return( html`
        <div class="todo-card">
          <div> ${item.text} </div>
          <button class="todo-button" @click=${()=> this.deleteToDo(item)} >-</button>
        </div>
    `)};
    
    const todos = html`
      <div class="todos-container">
          ${items.map(
            (item) => todoCard(item)
          )}
      </div>
    `
    
    // TODO: Define partial templates.
    return html`
      ${todos}
      <div class="add-todos-container">
        <label>
          Add new Todo:
          <input id="newitem" aria-label="New item">
        </label>

        <button class="todo-button" @click=${this.addToDo}>+</button>
      </div>
    `;
  }


  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addToDo() {
    if(this.input.value !== ''){
      this._listItems = [
        ...this._listItems,
        {text: this.input.value},
      ];
      this.input.value = '';
    }
  }

  deleteToDo(todo) {
    const newTodos = this._listItems.filter((t) => t !== todo);
    this._listItems = newTodos;
  }
}
customElements.define('lit-todo-list', LitToDoList);
