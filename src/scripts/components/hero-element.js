class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero-element">
            <div class="hero-content">
                <h1>Warisan Nusantara</h1>
                <p>Temukan berbagai sejarah dan budaya yang ada di Indonesia</p>
            </div>
            </div>
          `;
  }
}

customElements.define('hero-element', HeroElement);
