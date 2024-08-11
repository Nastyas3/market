class ItemCard extends HTMLElement {
    constructor(name, price, img){
        super();
        this.name = name;
        this.price = price;
        this.img = img;
    }
    connectedCallback() {
        this.innerHTML = `<img src="${this.img}">
             <h2 id="name"> ${this.name} </h2>
             <div class="price-holder">Цена <span id="price">${this.price}</span>$</div>
             <button id="buy">купить</button>`
    }
}
customElements.define("item-card",ItemCard);