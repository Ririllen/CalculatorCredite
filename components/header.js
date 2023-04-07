class Header extends HTMLElement {
    constructor() {
      super();
    }

 connectedCallback(){
    this.innerHTML = `
    <header>
        <div class="denumire">
            <p>Banca Teaca</p>
            <p>Unde banii sunt in siguranta</p>
        </div>
        <div class="nav-menu-background">
            <nav class="nav-menu">    
                <ul>
                    <li><a href="index.html">Acasa</a></li> <!--class="currentlyActive" -->
                    <li><a href="calculator.html">Calculator</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="despre.html">Despre</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;
  }
}
  
customElements.define('header-component', Header);

