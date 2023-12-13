import styles from "./footer.css" assert { type: "css" };

class Footer extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = this.template();
    shadow.adoptedStyleSheets = [styles];
  }

  template() {
    return `
      <footer>
        2023 Glico Saúde. Todos os direitos reservados.<br>
        <div class="about"> Mais informações sobre diabetes podem ser acessadas no site da <a href="https://diabetes.org.br/"target="_blank">Sociedade Brasileira de Diabetes.  </a>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);