class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="upper">
        <div class="logo">
            <img class="footer-logo" src="../icon/logo.png" alt="Logo">
            <p>Jelajahi Sejarah dan Budaya Indonesia</p>
        </div>
          <div class="social-media">
              <ul>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
    </div>
      
      <div class="bottom">
        <div class="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#/explore">Explore</a></li>
            <li><a href="#/about-us">About</a></li>
          </ul>
        </div>
      </div>
          `;
  }
}

customElements.define('footer-bar', FooterBar);
