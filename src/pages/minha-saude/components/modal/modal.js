import styles from './modal.css' assert { type: 'css' };
class Modal extends HTMLElement {
  constructor(title, content, handleSave) {
    super();
    this.title = title; 
    this.content = content;
    this.modal = null;
    this.build();
    this.handleSave = handleSave;
  }

  build() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = this.template();
    shadow.adoptedStyleSheets = [styles];
    this.modal = shadow.querySelector(".modal");
    console.log(modal)
    const closeButton = shadow.querySelector(".close");
    closeButton.addEventListener("click", () => {
      this.close();
    });

    const form = shadow.querySelector('#form');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      console.log(data) 
      this.handleSave(data);
      // this.close();
    });
  }

  template() {
      return `
      <div id="modal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <div class="modal-title">
          <h1>${this.title}</h1>
          </div>
          <div class="modal-body">
            ${this.content}
          </div>
          </div>
        </div>
      </div>
      `;
  }

  open() {

    this.modal.style.display = "block";
    // $('.container').addClass('container-scaleBack');   
    // $('.container').removeClass('container-scaleForward')
  }

  close() {
    this.modal.style.display = "none";
    // $('.container').addClass('container-scaleForward')
    // $('.container').removeClass('container-scaleBack');  
  }

}

customElements.define("modal-component", Modal);


export default Modal;
