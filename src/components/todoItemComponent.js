const template_2 = document.createElement('template');

template_2.innerHTML = `
  <style>
    .todo-item-card {
      font-family: 'Arial', sans-serif;
      background: #f4f4f4;
      max-width: 500px;
      margin-left: 40px;
      margin-bottom: 30px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 5px;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px 0px 10px;
    }

    h3 {
      color: blue;
      margin: 0.5rem 0;
    }
    
    p {
      margin: 0.5rem 0;
    }

    img {
      width: 100%;
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
  <div class="todo-item-card">
    <div class="content">
      <h4></h4>
      <button id="delete-button" class="btn">-</button>
    </div>
  </div>

`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    // Indicate that we want to be notified
    // when the `val` attribute is changed
    return ['task-name'];
  }
  
  connectedCallback() {
    // Render the initial value
    // when this element is placed into the DOM
    this.render(this.getAttribute('task-name'));
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal != newVal) {
      // If the value for the `val` attribute has changed
      // then re-render this element
      this.render(newVal);
    }
  }  
  
  render(val = 'no value') {
    this.shadowRoot.innerHTML = `
    <style>
      .todo-item-card {
        font-family: 'Arial', sans-serif;
        background: #f4f4f4;
        max-width: 500px;
        margin-left: 40px;
        margin-bottom: 30px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 5px;
      }

      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px 0px 10px;
      }

      h3 {
        color: blue;
        margin: 0.5rem 0;
      }
      
      p {
        margin: 0.5rem 0;
      }

      img {
        width: 100%;
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
    <div class="todo-item-card">
      <div class="content">
        <h4>${val}</h4>
        <button id="delete-button" class="btn">-</button>
      </div>
    </div>
    `;
    this.shadowRoot.getElementById("delete-button").addEventListener("click", (e) => this.deleteItem(e));
  }

  deleteItem(e){
    this.shadowRoot.removeChild(e.target.parentNode.parentNode);
  }
}

window.customElements.define('todo-item', TodoItem);