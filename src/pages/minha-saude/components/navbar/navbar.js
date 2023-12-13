class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="logo">
        <img src="./static/img/logo.png" alt="logo">
          <a href="../../pages/home.html"> <h1>Portal Glico Saúde</h1> </a>
      </div>

      <div class="menuPerfil">
        <ul>
          <li class="dropdown">
            <img src="./static/img/perfil.png" alt="perfil">
              <div class="dropdown-menuPerfil">
                <a href="../pages/login.html">Meus Dados</a>
                <a href="../../pages/minha-saude">Avaliar saúde</a>
                <a href="../../pages/receitas-favoritas.html">Receitas Favoritas</a>
              </div>
          </li>
        </ul>
      </div>
    </header>
    <div class="menu">
      <ul>
        <li>
          <a href="../../pages/home.html">Início</a>
        </li>
        <li class="dropdown">
          <a href="../../pages/bons-habitos.html">Bons Hábitos</a>
        </li>
        <li class="dropdown">
          <a href="../../pages/receitas.html">Receitas Fáceis</a>
          <div class="dropdown-menu">
            <a href="../../pages/aves.html">Aves</a>
            <a href="../../pages/bolos.html">Bolos e Tortas</a>
            <a href="../../pages/carnes.html">Carnes</a>
            <a href="../../pages/doces.html">Doces e Sobremesas</a>
            <a href="../../pages/massas.html">Massas</a>
            <a href="../../pages/pages/peixes.html">Peixes e Frutos do Mar</a>
            <a href="../../pages/pages/saladas.html">Saladas e Molhos</a>
            <a href="../../pages/saiba-mais.html">Saiba Mais</a>
          </div>
        </li>
      </ul>
    </div>
    `;
  }
}

customElements.define('nav-component', Nav);