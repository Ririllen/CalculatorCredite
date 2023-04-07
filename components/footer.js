class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer>
            Copyright 2023 &copy - ririteaca. Toate drepturile rezervate. Banca Teaca, Chisinau, MD-2008
        </footer>
        `;
    }
}
    
customElements.define('footer-component', Footer);    