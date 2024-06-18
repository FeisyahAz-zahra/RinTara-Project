class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="app-bar">

            
            <a href="/" class="app-bar-logo">
            
            <img class="appbar-logo" src="../icon/app-logo.png" alt="Logo">
            
            </a>
            
            <button type="button" id="hamburger" aria-label="navigation-menu" tabindex="0">☰</button>

            <nav id="navigationDrawer" class="app-bar-navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#/explore">Explore</a></li>
                    <li><a href="#/about-us">About Us</a></li>
                </ul>
                
            </nav>
            

        </div>
          `;
  }
}

customElements.define('app-bar', AppBar);
