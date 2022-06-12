import {LitElement, html} from 'lit';

class MyElement extends LitElement {
    render() {
        return html`<div>Im Lit</div>`;
    }
}

customElements.define('my-element', MyElement);