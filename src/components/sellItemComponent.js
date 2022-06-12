const template = document.createElement('template');

template.innerHTML = `
  <style>
    .product-card {
      font-family: 'Arial', sans-serif;
      background: #f4f4f4;
      width: 300px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 5px;
    }

    .content {
      padding: 10px 20px 20px 20px;
    }

    h3 {
      color: blue;
      margin: 0.5rem 0;
    }

    h4 {
      margin: 0.5rem 0;
    }
    
    p {
      margin: 0.5rem 0;
    }

    img {
      width: 100%;
    }

    .line-through {
      text-decoration: line-through;
    }

    .current-price {
      display: flex;
      justify-content: space-between;
    }

    .discount {
      background: coral;
      padding: 5px;
      border-radius: 5px;
    }

    .star {
      width: 15px;
    }

    .stars {
      margin-top: 15px;
    }
  </style>

  <div class="product-card">
    <img />
    <div class="content">
      <h4></h4>
      <div class="info">
        <div class="current-price">
          <h3><slot name="price" /></h3>
          <p class="discount">-<slot name="discount" /></p>
        </div>
        <p>Normal: <span class="line-through" id="old-price"></span></p>
        <div class="stars"></div>
      </div>
    </div>
  </div>
`;

class SellItem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h4').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    this.shadowRoot.getElementById('old-price').innerText = this.getAttribute('old-price');
    
    const star = `<img 
      src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"
      class="star"
    />`
    this.shadowRoot.querySelector('.stars').innerHTML = star.repeat(parseInt(this.getAttribute('stars'), 10));
  }
}

window.customElements.define('sell-item', SellItem);