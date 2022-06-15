import {LitElement, html, css} from 'lit';

class SellItemLit extends LitElement {
    static styles = css`
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
    `

    static properties = {
      title: { type: String },
      image: { type: String },
      price: { type: String },
      oldPrice: { attribute: 'old-price' },
      discount: { type: Number },
      stars: { type: Number }
    };

    starsTemplate() {
      const starLink = "https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png"

      const starArray = new Array(this.stars).fill(starLink);

      return html`${starArray.map((starLink) => html`<img class="star" src="${starLink}" />`)}`
    }

    render() {
      return html`
        <div class="product-card">
          <img src="${this.image}" />
          <div class="content">
            <h4>${this.title}</h4>
            <div class="info">
              <div class="current-price">
                <h3>${this.price}</h3>
                <p class="discount">-${this.discount}%</p>
              </div>
              <p>Normal: <span class="line-through" id="old-price">${this.oldPrice}</span></p>
              <div class="stars">
                ${
                  this.starsTemplate()
                }
              </div>
            </div>
          </div>
        </div>
      `;
    }
}

customElements.define('sell-item-lit', SellItemLit);