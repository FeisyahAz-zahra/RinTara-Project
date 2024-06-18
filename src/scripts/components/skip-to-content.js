class SkiptoContent extends HTMLElement {
    _shadowRoot = null;
  
    _style = null;
  
    constructor() {
      super();
  
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._style = document.createElement('style');
    }
  
    _updateStyle() {
      this._style.textContent = `
            :host {
              display: block;
            }
      
            .skip-link {
              position: absolute;
              top: -40px;
              left: 10px;
              background: white;
              color: black;
              padding: 10px 15px;
              z-index: 200;
              transition: all 0.3s ease-in-out;
              text-decoration: none;
            }
            
            .skip-link:focus {
              top: 10px;
            }
          `;
    }
  
    _emptyContent() {
      this._shadowRoot.innerHTML = '';
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this._emptyContent();
      this._updateStyle();
  
      this._shadowRoot.appendChild(this._style);
      this._shadowRoot.innerHTML += `
      <a class="skip-link">Skip to main content</a>
  `;
  
      const mainContent = document.querySelector('#mainContent');
  
      // query skip link dan menambahkan listener
      this._shadowRoot.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();
        mainContent.focus();
      });
  
      this._shadowRoot.querySelector('a').addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          mainContent.focus();
        }
      });
    }
  }
  
  customElements.define('skip-to-content', SkiptoContent);
  